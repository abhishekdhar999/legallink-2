import { asyncHandler } from "../Utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => {
    console.log("in register user")
    res.send('Test response');
    try {
        // Your logic here
        res.send('Success');
      } catch (error) {
        res.status(500).send('Server error');
        next(error); // Pass error to the next middleware
      }
});


export  {registerUser};