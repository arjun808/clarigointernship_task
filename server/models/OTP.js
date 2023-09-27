const mongoose= require("mongoose");
const mailSender = require("../utils/mailSender")
const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:60*5,
    }
});

async function sendVerificationEmail (email,otp) { 
    try{
        const mailResponse = await mailSender(
            email,
            "Verification Email",
            otp,
        )
        console.log("Email sent successfully: ", mailResponse.response);

    }catch(err){
        console.log(err,"error while sending mail");
    }
 }
 OTPSchema.pre("save",async function(next){
    console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();

 })
 module.exports =mongoose.model("OTP", OTPSchema);

