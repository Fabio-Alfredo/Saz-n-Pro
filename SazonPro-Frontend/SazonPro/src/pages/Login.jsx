import React from "react";
import AuthMethods from "../components/auth/AuthMethods";
import AuthIcon from "../components/auth/AuthIcon";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-primary via-secondary to-tertiary ">
      <div className="flex flex-row w-11/12 sm:w-4/5 lg:w-2/3 max-h-[70vh] bg-gray rounded-lg md:rounded-r-lg">
        <div className="w-5/12 hidden md:flex md:justify-center md:items-center overflow-hidden p-1">
          <AuthIcon />
        </div>
        <section className="grid grid-rows-4 w-full md:w-7/12 bg-white rounded-md pt-9">
          <AuthMethods />
        </section>
      </div>
    </div>
  );
};

export default Login;
