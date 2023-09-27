const mongoose = require("mongoose")
const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
      
    },
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
    

},
{ timestamps: true }
)
module.exports=mongoose.model("user",userSchema);