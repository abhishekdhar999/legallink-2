import { Router } from 'express'
import { upload } from '../Middleware/mullter.js';
import { loginUser, logoutUser, refreshAccessToken, registerUser } from '../src/Controllers/user.controller.js';
import { verifyJwt } from '../Middleware/auth.middleware.js';

const router = Router();

router.route("/register").post(
 upload.fields([
    {
        name: 'avatar',
        maxCount : 1
    },
    {
        name: "coverImage",
        maxCount: 1
    }
 ]),
    registerUser);

router.route("/login").post(loginUser);
router.route("/logout").post(verifyJwt,logoutUser);
router.route("/refreshAccessToken").post(refreshAccessToken)
export default router;