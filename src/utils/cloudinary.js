import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // File has been uploaded
    // console.log("File is uploaded | Cloudinary, URL: ", response.url);

    fs.unlinkSync(localFilePath); // Removes the file from local storage
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // Removes the file from local storage
    console.error("Cloudinary upload error | ERROR: ", error.message);
  }
};

const deleteFromCloudinary = async (cloudinaryFileName) => {
  try {
    await cloudinary.uploader.destroy(`${cloudinaryFileName}`);
  } catch (error) {
    console.error("Cloudinary delete error | ERROR: ", error.message);
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
