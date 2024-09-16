import mongoose , {Schema} from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
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

userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        return next();
    }

    this.password = bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccessTokken = async function (){
jwt.sign(
    {
        _id : this._id,
        name : this.name,
        email:this.email

},
process.env.ACCESS_TOKEN_SECRET,
{
expiresIn:"10d"
}
)
}

userSchema.methods.generateRefreshTokken = async function (){
    jwt.sign(
        {
            _id : this._id,
            name : this.name,
            email:this.email
    
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
    expiresIn:"1d"
    }
    )
}
const user  = module.exports("User",userSchema);
module.exports = user;