import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-primary via-secondary to-tertiary ">
      <div className="h-fit w-70% mx-2 sm:mx-0 grid grid-cols-2 bg-gray_dark">
        <div className="">
          <h2 className="text-3xl text-center text-gray-50">Login</h2>
        </div>
        <section className="grid grid-rows-2">
          <LoginForm />
        </section>
      </div>
    </div>
  );
};

export default Login;
