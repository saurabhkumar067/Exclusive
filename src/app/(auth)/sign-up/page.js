"use client"
import AuthFormHeader from "@/components/auth/AuthFormHeader";
import AuthLayout from "@/components/auth/AuthLayout";
import GoogleButton from "@/components/auth/GoogleButton";
import InputField from "@/components/auth/InputField";
import PrimaryButton from "@/components/auth/PrimaryButton";
import SwitchAuthText from "@/components/auth/SwitchAuthText";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignUp() {
  const [userData, setUserData] = useState(
    {
      name:"",
      emailOrPhone:"",
      password:"",
    },
  )
  const router = useRouter()

  const handleInputField = (e)=>{
    const {name, value} = e.target;
    setUserData((prev)=> ({...prev, [name]:value}))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("loggin", "false")

    setUserData({
      name:"",
      emailOrPhone:"",
      password:"",
    })

    router.push("/login")
  }
  return (
    <div>
      <AuthLayout>
        <AuthFormHeader
          title="Create an account"
          subtitle="Enter your details below"
        />
        <form className="flex flex-col mt-7" onSubmit={handleSubmit}>
          <InputField type="text" placeholder="Name" name="name" onChange={handleInputField} value={userData.name} />
          <InputField type="text" placeholder="Email or Phone Number" name="emailOrPhone" onChange={handleInputField} value={userData.emailOrPhone} />
          <InputField type="password" placeholder="Password" name="password" onChange={handleInputField} value={userData.password} />
          <PrimaryButton text="Create Account" />
          <GoogleButton />
        </form>
        <SwitchAuthText
          prompt="Already have an account?"
          linkText="Log in"
          linkHref="/login"
        />
      </AuthLayout>
    </div>
  );
}

export default SignUp;
