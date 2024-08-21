import mongoose , {Schema} from "mongoose";

const userSchema = new Schema(
    {
        name: {type: String, required: true,index:true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        phoneNumber:{type: Number,required:true},
        isVerifiedUser:{type:Boolean,default:false},
        refreshTokkens:{type:String}
    },
    {
        timestamps: true,
    }
)

const user  = module.exports("User",userSchema);
module.exports = user;