const mongoose = require("mongoose");
const nodemailer= require("nodemailer")
const dotenv=require("dotenv");
dotenv.config();




const mailSender=async(email,title,body)=>{
try{
    let transporter= nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS,
        },
        secure:false,
    })
    let info = await transporter.sendMail({
        from: `"clarigo Task ||" <${process.env.MAIL_USER}>`, // sender address
        to: `${email}`, // list of receivers
        subject: `${title}`, // Subject line
        html: `${body}`, // html body

    })
    return info;

}catch(err){
    console.log(err,"Error occured while sending mail")
}

}
module.exports=mailSender;