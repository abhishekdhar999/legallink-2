import { asyncHandler } from "../Utils/asyncHandler.js";
import {User} from '../../Model/user.model.js'
import {ApiError} from '../Utils/ApiError.js';
import { ApiResponse } from '../Utils/ApiResponse.js';
import { uploadInCloudinary } from "../Utils/fileUploadInCloud.js";
import jwt from "jsonwebtoken"


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
    
    const { name, email, password, phoneNumber,role, } = req.body;
  
    if (!name || !email || !password || !phoneNumber || !role ) {
    //   console.log("Missing fields");
      return res.status(400).json({ message: "All fields are required." });
    }
  
    const usersName = User.findOne(name);
    const usersEmail = User.findOne(email);
    const usersPhoneNumber = User.findOne(phoneNumber);
    // if (usersName || usersEmail || usersPhoneNumber) {
    //     console.log("User already exists");
    //     // throw error
    // }
// console.log("req.file",req.file);
//     const avatarLocalPath = req.files?.avatar[0]?.path;
// console.log(avatarLocalPath)
//     let coverImageLocalPath;
//     if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
//         coverImageLocalPath = req.files.coverImage[0].path
//     }

    // if (!avatarLocalPath) {
    //     throw new ApiError(400, "Avatar file is required 1")
    // }
    // console.log(avatarLocalPath)
//  const avatars = await uploadInCloudinary(avatarLocalPath);
//  const coverImage = await uploadInCloudinary(coverImageLocalPath);

// if(!avatars){
//     throw new ApiError(400, "Avatar object is required")
// }

const user = await User.create({
    name,
    // avatar:avatars.url,
    email,
    password,
    phoneNumber,
    // coverImage: coverImage?.url || "",
    role
})

const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
);


if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user")
}


return res.status(200).json(
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

  const getUserChannelProfile = asyncHandler(async(req,res)=>{
   
    const userId = req.params.userId

    if(!userId){
        throw new ApiError(400,"user not found");
    }

  const channel =   User.aggregate([
        {
            $match:{
                _id : userId
            }
    },
    {
            $lookup:{
                from: 'subscriptions',
                localField: '_id',
                foreignField: 'channel',
                as: "subscribers"
            }
    },
    {
        $lookup:{
            from: 'subscriptions',
            localField: '_id',
            foreignField: 'subscriber',
            as: "subscribedTo"
        }
    },
    {
        $addFields:{
           
            subscribersCount: {
                $size: "$subscribers"
            },
            channelsSubscribedToCount: {
                $size: "$subscribedTo"
            },
            isSubscribed: {
                $in: [req.user._id, "$subscribedTo"]
                }
        }
    },
   {
    $project:{
        _id: 1,
        name: 1,
        email: 1,
        subscribersCount: 1,
        channelsSubscribedToCount: 1,
        isSubscribed: 1,
        avatar: 1,
        coverImage: 1,
       
   }

    },
    

])
if (!channel?.length) {
    throw new ApiError(404, "channel does not exists")
}

return res
.status(200)
.json(
    new ApiResponse(200, channel[0], "User channel fetched successfully")
)
  })

  const getWatchHistory = asyncHandler(async(req,res)=>{

    const user = await User.aggregate([
        {
            $match: {
                _id:req.user._id
        }
    },
    {
        $lookup:{
            from:"videos",
            localField:"watchHistory",
            foreignField:"_id",
            as:"watchHistory",
            pipeline:[
                {
                    $lookup:{
                        from:"users",
                        localField:"owners",
                        foreignField:"_id",
                        as:"owners",
                        pipeline:[
                            {
                                $project:{
                                    name:1,
                                    email:1,
                                    _id:1
                            }
                        }
                        ]
                    }
                },
                {
                    $project:{
                        title:1,
                        views:1,
                        _id:1,
                        description:1
                } 
                }
            ]
        }
    },
    {
        $addFields:{
            owner:{
                $first: "$owner"
            }
        }
    }
    ])
   return res
   .status(200)
   .json(
    new ApiResponse(200,
        user[0].watchHistory,
        "users watch history fetched successfully")
   )



  })

  const getAllUsersWhoseRoleIsTeacher = asyncHandler(async(req,res)=>{
    const user = await User.find({role:"Teacher"}).select("-password")

    if(!user){
        throw new ApiError(400,"user whose role is teacher no found");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200,
            user,
            "users whose role is teacher fetched successfully")
            )
  })

  const getCurrentUser = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id).select("-password")

    if(!user){
        throw new ApiError(400,"user not found");
    }
    console.log("user",user)
    return res
    .status(200)
    .json(
        new ApiResponse(200,
            user,
            "current user fetched successfully")
            )
    // .json(200,
    //     new ApiResponse(
    //         200,
    //         user,
    //     ))
  })

  const editUserProfile = asyncHandler(async (req, res) => {
    const { name, charge, location, description,subjects } = req.body;
    
    // Debugging: Log request body
    console.log("Request body:", req.body);
    
    // Fetch the user from the database
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  
    // Update user fields
    if(name){
        user.name = name
    }else{
        user.name = user.name
    }
     
    user.location = location || user.location;
    user.description = description || user.description;
  
    // Only update the charge if the user is a Teacher
    if (user.role === 'Teacher') {
      user.charge = charge !== undefined ? charge : user.charge;
    }
    if (user.role === 'Teacher') {
        user.subjects = subjects !== undefined ? subjects : user.charge;
      }
  
    // Save the updated user document
    try {
      await user.save();
      return res.status(200).json({
        statusCode: 200,
        data: user,
        message: "User profile updated successfully",
      });
    } catch (error) {
      console.error("Error saving user:", error);
      return res.status(500).json({ message: "Failed to update user profile" });
    }
  });
  
  export { registerUser ,loginUser,logoutUser,refreshAccessToken,getUserChannelProfile,getWatchHistory,getAllUsersWhoseRoleIsTeacher,getCurrentUser,editUserProfile};