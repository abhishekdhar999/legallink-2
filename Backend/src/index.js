import connectDB from "./db/db.js";
import { app } from "./app.js";
import dotenv from 'dotenv'
const port  =  3001;
dotenv.config()
connectDB()
.then(
   ()=>{
        app.listen(port,()=>{
            console.log("server is running on port",port)
        })
    }
)
.catch({
    error: (err) => console.error(err)
})