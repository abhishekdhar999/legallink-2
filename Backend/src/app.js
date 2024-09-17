import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import authRoutes from '../Routes/authRoutes.js'
const app = express();
app.use(cors());
app.use(express.json({limit:"16kb"}))
app.use(cookieParser());
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static('public'));




// routes


 app.use("/users",authRoutes);





export {app};