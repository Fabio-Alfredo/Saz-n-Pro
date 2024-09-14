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

      <div className="row-span-1 flex flex-col items-center pt-5 gap-4">
        <p className="text-center">-- OR --</p>
        <div className="flex justify-between gap-3 w-3/4">
          <button className="flex pl-1 items-center border-solid border border-gray gap-2 h-8 w-28 rounded-lg cursor-pointer">
            <FaGithub className="text-2xl" />
            Github
          </button>
          <button className="flex pl-1 items-center border-solid border border-gray gap-2 h-8 w-28 rounded-lg cursor-pointer">
            <FcGoogle className="text-2xl" />
            Google
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthMethods;
