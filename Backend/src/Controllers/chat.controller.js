
import { ApiError } from "../Utils/ApiError.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import { Chat } from "../../Model/chat.model.js";

import { ApiResponse } from "../Utils/ApiResponse.js";
import { User } from "../../Model/user.model.js";


const createChat = asyncHandler(async (req,res)=>{
    console.log("innnnnnnnnnnnnn")
    console.log("body",req.body)
     const {userId}  =  req.body
    // const userId = "66f2e14911579143abfeb2fb"
console.log("backend userId",userId)
  if (!userId) {
    console.log("UserId  not sent with request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find({
  
    $and: [
      { user: { $elemMatch: { $eq: req.user._id } } },
      { user: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("user", "-password")
     .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      
      user: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "user",
        // "-password"
      );
      res.status(200).json(FullChat);
    //  res.json("created chat",createdChat)
    } catch (error) {
      res.status(400);
      throw new Error( "dsvsdv",error.message);
    }
  }
})

const fetchChatsOfLoggedInUser = asyncHandler(async (req,res)=>{

 const chatsOfLoggedInUser = await Chat.find({ user: { $elemMatch: { $eq: req.user._id } } })
 .populate("user", "-password")
         .populate("latestMessage")
             .sort({ updatedAt: -1 })
    
    return res
    .status(200)
    .json(
       new ApiResponse(
        200,
        {
            message:"chatsOfLoggedInUser fetched succesfully",
        chats : chatsOfLoggedInUser
    }
       )
    )
       
    
})

export {createChat,fetchChatsOfLoggedInUser}