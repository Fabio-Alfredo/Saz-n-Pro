import React from "react";
import AuthIcon from "../components/auth/AuthIcon";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-primary via-secondary to-tertiary ">
      <div className="flex flex-row w-11/12 h-fit lg:w-2/3 max-h-[60vh] bg-gray rounded-lg md:rounded-r-lg ">
        <div className="w-5/12 hidden md:flex md:justify-center md:items-center overflow-hidden p-1">
          <AuthIcon />
        </div>
        <section className="w-full md:w-7/12 bg-white rounded-md pt-9">
          <h1 className='text-xl md:text-2xl text-center text-gray-800 font-sans font-bold'>Hello Welcome!</h1>
          <RegisterForm />
        </section>
      </div>
    </div>
  );
};

export default Register;
