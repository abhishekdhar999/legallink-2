

const asyncHandler = (requestHandler)=> {
  console.log("nscdscj")
  return  (req,res,next)=>{
    console.log("in async handler")
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
    }
    
}
export {asyncHandler};