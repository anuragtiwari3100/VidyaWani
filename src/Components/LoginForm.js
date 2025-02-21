import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from 'react-hot-toast';
const LoginForm = ({setIsLoggedIn}) => {
const navigate =  useNavigate();

  const[formData,setFormData]  = useState({
    email:"", password:""
  })

  

    function submitHandler(e){
      e.preventDefault();
      setIsLoggedIn(true);
      console.log("Printing the formData...");
      console.log(formData);
      toast.success("Logged In");
      navigate("/dashboard");

    }
  


  const[showPassword,setShowPassword] = useState(false);




  function changeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }
  return (
    <div>
      <form 
       onSubmit={submitHandler}
       className="flex flex-col w-full gap-y-4 mt-6"
       >
        <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address
                    <sup className="text-pink-200">*</sup>
                </p>
          <input required type="email"  value={formData.email}  name='email' onChange={changeHandler} placeholder='Enter email id' 
                               className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"

          />
        </label>

        <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password
                    <sup className="text-pink-200">*</sup>
                </p>
          <input required type={showPassword ? ("text") : ("password")} name='password' value={formData.password} onChange={changeHandler} placeholder='Password' 
                              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"

          />
          
        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                </span>
           
                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                </Link>
        </label>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">Sign in</button>
 
      </form>

    </div>
  )
}

export default LoginForm
