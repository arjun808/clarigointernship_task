const express= require("express");
const router = express.Router();
const {signup,sendotp,login}=require("../controllers/Auth");


router.post("/signup",signup);
router.post("/sendotp",sendotp);
router.post("/login",login);
module.exports=router;