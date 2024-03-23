import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  refresshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  changeAvatar,
  changeCoverImage,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// Secured Route
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refresshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account-details").post(verifyJWT, updateAccountDetails);
router
  .route("/change-avatar")
  .post(verifyJWT, upload.single("avatar"), changeAvatar);
router
  .route("/change-cover-image")
  .post(verifyJWT, upload.single("coverImage"), changeCoverImage);

export default router;
