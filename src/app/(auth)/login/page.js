"use client";
import AuthFormHeader from "@/components/auth/AuthFormHeader";
import AuthLayout from "@/components/auth/AuthLayout";
import InputField from "@/components/auth/InputField";
import PrimaryButton from "@/components/auth/PrimaryButton";
import SwitchAuthText from "@/components/auth/SwitchAuthText";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Login() {
  const [userData, setUserData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const { login } = useAuth();
  const router = useRouter();

  const handleInputField = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored = JSON.parse(localStorage.getItem("user"));

    if (
      stored?.emailOrPhone === userData.emailOrPhone &&
      stored?.password === userData.password
    ) {
      login(stored);
      alert("Successfully Login");
      localStorage.setItem("loggin", "false");
      router.push("/");
      setTimeout(() => {
        window.location.reload()
      }, 500);


    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <AuthLayout>
        <AuthFormHeader
          title="Login in to Exclusive"
          subtitle="Enter your details below"
        />
        <form className="flex flex-col mt-7" onSubmit={handleSubmit}>
          <InputField
            placeholder="Email or Phone Number"
            name="emailOrPhone"
            onChange={handleInputField}
            value={userData.emailOrPhone}
          />
          <InputField
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInputField}
            value={userData.password}
          />
          <div className="flex justify-between items-center ">
            <PrimaryButton text="Log In" className="w-[40%]" />
            <Link href="#" className="text-sm text-[#DB4444] underline mt-5">
              Forgot Password?
            </Link>
          </div>
        </form>
        <SwitchAuthText
          prompt="Don't have an account? "
          linkText="Sign Up"
          linkHref="/sign-up"
        />
      </AuthLayout>
    </>
  );
}

export default Login;
