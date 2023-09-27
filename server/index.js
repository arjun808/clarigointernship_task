const express= require("express");
const app=express();

const cookieParser= require("cookie-parser");
app.use(cookieParser());
const db= require("./config/db");
db.connect();
const cors = require('cors');  
app.use(cors());
app.use(express.json());
const userRoute= require("./routes/authRoutes");

app.use("/api/v1/auth",userRoute);
app.listen(4000,(req,res)=>{
    console.log("server is started on port number 4000")
})