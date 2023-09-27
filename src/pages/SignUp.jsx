import { Button, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch,useSelector } from "react-redux";
import { setSignupData } from "../slices/authSlice";

import { useState } from "react";
function SignUP() {
  const dispatch= useDispatch();
  const [data,setData]=useState({});
  
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
    try {
    
      
      const email=values.email;
      await axios.post("http://localhost:4000/api/v1/auth/sendotp",{email})
        .then((response) => {
          console.log(response.data.success);
        })
        .catch((error) => {
          console.error(error);
        });
        setData(values);
        const signupdata={
          ...data,
        }
        dispatch(setSignupData(signupdata));
   toast.success("otp is sended to your mail please check")
        navigate("/verification",data)
    } catch (err) {
      console.error(err);
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
