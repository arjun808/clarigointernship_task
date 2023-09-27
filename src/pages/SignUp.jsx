import { Button, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";

import { useState } from "react";
function SignUP() {
  
  const navigate = useNavigate();
  
  const validateEmail = (rule, value, callback) => {
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      callback('Please enter a valid email address!');
    } else {
      callback();
    }
  };
  const validateName = (rule, value, callback) => {
    const regex = /^[a-zA-Z\s]*$/; // Regular expression to allow only alphabets and spaces
    if (!value) {
      callback("Please input your name!");
    } else if (!regex.test(value)) {
      callback("Please enter a valid name!");
    } else {
      callback();
    }
  };
 
  const onFinish = async (values) => {
   try{
 const responce= await axios.post("/api/v1/auth/signup",values);
//  if(responce.data.success==true){
//     console.log("data sended to server successfully");
//  }
 console.log("data sended to server successfully");
   }catch(error){
    console.log(error,"error while sending the data to server");

   }
   
  };

  return (
    <div >
      <div >
        {/* { !varified &&<Form layout="vertical" onFinish={otpVarification}>
        <h1 className="card-title">OTP Verification</h1>
         
          <Form.Item label="Email" name="email" 
           rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          {
            validator: validateEmail,
          },
        ]}
          
          >
            <Input placeholder="Email" />
          </Form.Item>
        

          <Button
            className="primary-button my-2 full-width-button"
            htmlType="submit"
          >
           Get OTP
          </Button>
          <Link to="/login" className="anchor mt-2">
            CLICK HERE TO LOGIN
          </Link>
         
        </Form>} */}
        <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
          <Form.Item label=" First Name" name="firstName"
          
          rules={[
    {
      required: true,
      message: "Please input your name!",
    },
    {
      validator: validateName,
    },
  ]}
          >
            <Input placeholder="first name" />
          </Form.Item>


 <Form.Item label=" Last Name" name="lastName"
          
          rules={[
    {
      required: true,
      message: "Please input your name!",
    },
    {
      validator: validateName,
    },
  ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>




          <Form.Item label="Email" name="email"
           rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          {
            validator: validateEmail,
          },
        ]}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>



          <Form.Item label="confirm Password" name="confirmPassword">
            <Input placeholder="Confirm Password" type="password" />
          </Form.Item>
          <Form.Item label="otp" name="otp">
            <Input placeholder="otp" type="Number"/>
          </Form.Item>

        
         <Button
            className="primary-button my-2 full-width-button"
            htmlType="submit"
          >
            REGISTER
          </Button>
          
        
{/* 
          <Link to="/login" className="anchor mt-2">
            CLICK HERE TO LOGIN
          </Link> */}
        </Form>
      </div>
    </div>
  );
}

export default SignUP;
