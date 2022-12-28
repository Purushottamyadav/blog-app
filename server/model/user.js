const mongoose =require("mongoose")

const userSchema=new mongoose.Schema({
    username:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String
    },
    confirmpassword: String
});

const userModel=mongoose.model("userdetails",userSchema)

module.exports=userModel