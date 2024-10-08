import { Router } from 'express'

// middleware
import { upload } from '../Middleware/mullter.js';
import { verifyJwt } from '../Middleware/auth.middleware.js';

// routes
import { loginUser, logoutUser, refreshAccessToken, registerUser,getUserChannelProfile, getWatchHistory, getAllUsersWhoseRoleIsTeacher, getCurrentUser, editUserProfile, findByLocation } from '../src/Controllers/user.controller.js';


const router = Router();

router.route("/register").post(
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'coverImage', maxCount: 1 }
    ]),
    registerUser
);

router.route("/login").post(loginUser);
router.route("/logout").post(verifyJwt,logoutUser);
router.route("/refreshAccessToken").post(refreshAccessToken);
router.route("/channels/:userId").get(verifyJwt,getUserChannelProfile);
router.route("/watchHistory").get(verifyJwt,getWatchHistory)
router.route("/roleteachers").get(getAllUsersWhoseRoleIsTeacher);
router.route('/currentuser').get(verifyJwt,getCurrentUser);
router.route("/edituser").put(verifyJwt,editUserProfile);
router.route("/searchbylocation/:long/:lat").get(verifyJwt,findByLocation)
export default router;