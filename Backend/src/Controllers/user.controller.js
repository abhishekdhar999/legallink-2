import { asyncHandler } from "../Utils/asyncHandler.js";
import {User} from '../../Model/user.model.js'
import {ApiError} from '../Utils/ApiError.js';
import { ApiResponse } from '../Utils/ApiResponse.js';
import { uploadInCloudinary } from "../Utils/fileUploadInCloud.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        console.log("userid",userId);
        const user = await User.findById(userId)
        console.log("upper user",user)
        const accessToken = await user.generateAccessTokken()
        const refreshToken = await user.generateRefreshTokken()

        user.refreshTokken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    console.log("In registerUser");
  
    const { name, email, password, phoneNumber } = req.body;
  
    if (!name || !email || !password || !phoneNumber) {
      console.log("Missing fields");
      return res.status(400).json({ message: "All fields are required." });
    }
  
    const usersName = User.findOne(name);
    const usersEmail = User.findOne(email);
    const usersPhoneNumber = User.findOne(phoneNumber);
    if (usersName || usersEmail || usersPhoneNumber) {
        console.log("User already exists");
        // throw error
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required 1")
    }
    console.log(avatarLocalPath)
 const avatar = await uploadInCloudinary(avatarLocalPath);
 const coverImage = await uploadInCloudinary(coverImageLocalPath);

if(!avatar){
    throw new ApiError(400, "Avatar object is required")
}

const user = await User.create({
    name,
    avatar:avatar.url,
    email,
    password,
    phoneNumber,
    coverImage: coverImage?.url || "",
})

const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
);

if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user")
}

return res.status(201).json(
    new ApiResponse(200, createdUser, "User registered Successfully")
)
    // Proceed with registration logic
    // Simulating a successful response
    
  });

  const loginUser = asyncHandler (async (req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        throw new ApiError(400,"fill the credentials")
    }
    const user = await User.findOne({email});
    if(!user){
        return new ApiError(404,"User not found");
        }
//     const isPasswordValid = await user.isPasswordCorrect(password)

//    if (!isPasswordValid) {
//     throw new ApiError(401, "Invalid user credentials")
//     }
        console.log("user",user);

        
const {accessToken,refreshToken} = await  generateAccessAndRefereshTokens(user._id)
console.log("accesstoken",accessToken);
console.log("refreshtoken",refreshToken);

        const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
        console.log("loggedinuser",loggedInUser);

        const options = {
            httpOnly: true,
             secure: false
        }

        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged In Successfully"
            )
        )

  })

  const logoutUser = asyncHandler( async(req,res)=>{
const id  = req.user._id;
if(!id){
    throw new ApiError(401,"User id not found")
}
  await User.findByIdAndUpdate(
    id,
    {
        $unset : {
            refreshTokken : null
        }
    },
    {
        new : true
    }
  )

  return res
  .status(200)
  .clearCookie("accessToken")
  .clearCookie("refreshToken")
  .json(
    new ApiResponse(
        200,
        {
            
        },
        "User logged out Successfully"
        )
        )
//     const refreshTokken = req.cookies.refreshToken;
//     if(!refreshTokken){
//         return new ApiError(401,"No refresh token found")
//     }

//     const user = await  User.findOne({refreshTokken})
// res.send(user)
//      user.refreshTokken = null;
// await user.save();

// return res 
// .status(200)
// .clearCookies("accessToken")
// .clearCookies("refreshToken")
// .json(
//     new ApiResponse(
//         200,
//         {
//             data:{user}
//             },
//             "User logged out successfully"
//             )
//             )
            

  })
  
  const refreshAccessToken = asyncHandler(async(req,res)=>{
    const incomingRefreshToken =  req.cookies?.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken){
        throw new ApiError(401,"no refreshTokken")
    }

    try {
        const decodedToken = jwt.verify(incomingRefreshToken,"qwertyuiop0987654321poiuytrewq");
    
        const user =await User.findById(decodedToken?._id);
    
        if(!user){
            throw new ApiError(401,"User not found")
        }
    console.log("refresgtokken",incomingRefreshToken)
    console.log("user resfresh token",user?.refreshTokken)
        if (incomingRefreshToken!== user?.refreshTokken) {
            throw new ApiError(401, "Refresh token is expired or used")
            
        }
    
      const {accessToken,newRefreshToken} = await generateAccessAndRefereshTokens(user._id);
    
      console.log(accessToken)
      console.log(newRefreshToken);
    
    
      const options = {
        httpOnly: true,
        secure: true
    }
    
    
    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", newRefreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {accessToken, refreshToken: newRefreshToken},
            "Access token refreshed"
        )
    )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }
  })
  export { registerUser ,loginUser,logoutUser,refreshAccessToken};