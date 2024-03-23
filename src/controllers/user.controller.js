import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    /*
    whenever we called save method from Mongodb it always check for the required 
    fields so if we put validate before say false then it would not validate the 
    required fields and justice save the documents it is needed to set the refresh 
    token while user is logging in and we need to save its refresh token in database
    */

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating Access and Refresh token."
    );
  }
};

const validateEmail = (email) => {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regEx.test(email);
};

const registerUser = asyncHandler(async (req, res) => {
  const { email, password, username, fullName } = req.body;

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields required.");
  }

  if (!validateEmail(email)) throw new ApiError(400, "Valid email required.");

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser)
    throw new ApiError(409, "User with email or username already exixt.");

  const avatarLocalPath = req.files?.avatar[0]?.path;
  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  if (!avatarLocalPath) throw new ApiError(400, "Avatar file required.");

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) throw new ApiError(500, "Avatar url required.");

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken -__v -createdAt -updatedAt"
  );

  if (!createdUser)
    throw new ApiError(500, "Something went wrong while creating user.");

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully."));
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!(username || email))
    throw new ApiError(400, "Username or Email is required.");

  if (email) {
    if (!validateEmail(email)) throw new ApiError(400, "Valid email required.");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) throw new ApiError(404, "User not exist.");

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) throw new ApiError(401, "Password is incorrect");

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken -__v -createdAt -updatedAt"
  );

  // Sending Cookies
  /*
    By adding http only true and secure option true the cookies we set 
    from back end can only be accessed via back end front end can only 
    view the cookies but not can modify the cookies this is the extra 
    security we provided to the cookies
  */
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        201,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully."
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: "",
      },
    },
    {
      new: true, // If we add this value, then after updating the fields, the updated user will be returned
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(201, {}, "User logged out."));
});

const refresshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) throw new ApiError(401, "Unauthorized request.");

  try {
    const decodedToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    const user = await User.findById(decodedToken._id);

    if (!user) throw new ApiError(401, "Invalid refresh token.");

    if (user?.refreshToken !== incomingRefreshToken)
      throw new ApiError(401, "Refresh token is expired or used.");

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshTokens(user._id);

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          201,
          {
            accessToken,
            newRefreshToken,
          },
          "Access token refreshed successfully."
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token.");
  }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if ([oldPassword, newPassword].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields required.");
  }

  const user = await User.findById(req.user?._id);

  if (!user)
    throw new ApiError(
      500,
      "Something went wrong while fethching user information."
    );

  const isOldPasswordValid = await user.isPasswordCorrect(oldPassword);

  if (!isOldPasswordValid)
    throw new ApiError(401, "Old password is not valid.");

  user.password = newPassword;
  const updatedUser = await user.save({ validateBeforeSave: false });

  const isPasswordChanged = await updatedUser.isPasswordCorrect(newPassword);

  if (!isPasswordChanged)
    throw new ApiError(
      500,
      "Something went wrong while updating the password."
    );

  return res
    .status(200)
    .json(new ApiResponse(201, {}, "Password changed successfully."));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(201, req.user, "Current user fetched successfully."));
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  const { email, username, fullName } = req.body;

  if (!email && !username && !fullName)
    throw new ApiError(400, "One fields must required.");

  if (email) {
    if (!validateEmail(email)) throw new ApiError(400, "Valid email required.");
  }

  const user = await User.findById(req.user?._id).select(
    "-password -refreshToken -__v -createdAt -updatedAt"
  );

  if (email && user.email !== email) user.email = email;
  if (username && user.username !== username) user.username = username;
  if (fullName && user.fullName !== fullName) user.fullName = fullName;

  const updatedUser = await user.save({ validateBeforeSave: false });

  if (!updatedUser)
    throw new ApiError(
      500,
      "Something went wrong while updating the information."
    );

  return res
    .status(200)
    .json(
      new ApiResponse(201, updatedUser, "Account details updated successfully.")
    );
});

const changeAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file?.path;

  if (!avatarLocalPath) throw new ApiError(401, "Avatar filepath is missing.");

  if (!req.user) throw new ApiError(401, "User can't be fetched.");

  const avatarUrl = req.user?.avatar;

  if (!avatarUrl)
    throw new ApiError(401, "Avatar URL can't be fetched fromm user.");

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  if (!avatar) throw new ApiError(400, "Error while uploading on avatar.");

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken -__v -createdAt");

  if (user.avatar !== avatarUrl) {
    const parts = avatarUrl.split("/");
    // Get the last part of the URL
    const lastPart = parts[parts.length - 1];
    // Split the last part by '.' to remove the file extension
    const cloudinaryFileName = lastPart.split(".")[0];

    await deleteFromCloudinary(cloudinaryFileName);
  }

  return res
    .status(200)
    .json(new ApiResponse(201, user, "Avatar updated successfully."));
});

const changeCoverImage = asyncHandler(async (req, res) => {
  const coverImageLocalPath = req.file?.path;

  if (!coverImageLocalPath)
    throw new ApiError(401, "Cover Image filepath is missing.");

  if (!req.user) throw new ApiError(401, "User can't be fetched.");

  const coverImageUrl = req.user?.coverImage;

  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!coverImage)
    throw new ApiError(400, "Error while uploading on cover image.");

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        coverImage: coverImage.url,
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken -__v -createdAt");

  if (coverImageUrl) {
    const parts = coverImageUrl.split("/");
    // Get the last part of the URL
    const lastPart = parts[parts.length - 1];
    // Split the last part by '.' to remove the file extension
    const cloudinaryFileName = lastPart.split(".")[0];

    await deleteFromCloudinary(cloudinaryFileName);
  }

  return res
    .status(200)
    .json(new ApiResponse(201, user, "Cover Image updated successfully."));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refresshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  changeAvatar,
  changeCoverImage,
};
