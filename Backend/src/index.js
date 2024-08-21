import connectDB from "./db/db.js";
import { app } from "./app.js";


connectDB()
.then(
   ()=>{
        app.listen(8000,()=>{
            console.log("server is running on port 8000")
        })
    }
)
.catch({
    error: (err) => console.error(err)
})