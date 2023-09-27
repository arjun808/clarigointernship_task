import React from 'react'
import { Button, Form, Input } from "antd";
import { useSelector } from 'react-redux';





function OTP() {
    const { signupData } = useSelector((state) => state.auth)
    console.log(signupData);
   
    const handleFinish=async(values)=>{
        data.otp=values.otp;
    }
  return (
    <div>
    <>
    <Form layout="vertical" onFinish={handleFinish} >
        <h1>VERIFY YOUR EMAIL ADDRESS</h1>
          <Form.Item label="otp" name="otp">
            <Input placeholder="otp" type="Number"/>
          </Form.Item>

        
         <Button
            className="primary-button my-2 full-width-button"
            htmlType="submit"
          >
            submit 
          </Button>
          
        
{/* 
          <Link to="/login" className="anchor mt-2">
            CLICK HERE TO LOGIN
          </Link> */}
        </Form>
    </>
    </div>
  )
}

export default OTP