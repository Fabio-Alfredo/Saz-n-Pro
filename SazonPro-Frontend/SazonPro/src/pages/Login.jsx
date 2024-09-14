import React from "react";
import AuthMethods from "../components/auth/AuthMethods";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-primary via-secondary to-tertiary ">
      <div className="flex flex-row w-11/12 max-h-[60vh] bg-gray rounded-lg md:rounded-r-lg">
        <div className="w-1/2 hidden md:block">
          <h2 className="text-3xl text-center text-gray-50">Login</h2>
        </div>
        <section className="grid grid-rows-4 w-full md:w-1/2 bg-white rounded-md pt-9">
          <AuthMethods />
        </section>
      </div>
    </div>
  );
};

export default Login;
