import React from "react";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const AuthMethods = () => {
  return (
    <>
      <div className="row-span-3">
        <h1 className="text-xl md:text-2xl text-center text-gray-800 font-sans font-bold">
          Welcome back!
        </h1>
        <LoginForm />
      </div>
      <div className="row-span-1 flex flex-col items-center pt-5 gap-1">
        <p className="text-center font-sans">-- OR --</p>
        <div className="flex justify-between w-full px-8">
          <button className="flex pl-1 items-center border-solid border border-gray h-10 w-36 rounded-lg cursor-pointer font-sans text-xs">
            <FaGithub className="text-2xl mr-1" />
            Sing up with Github
          </button>
          <button className="flex pl-1 items-center border-solid border border-gray h-10 w-36 rounded-lg cursor-pointer font-sans text-xs">
            <FcGoogle className="text-2xl mr-1" />
            Sing up with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthMethods;
