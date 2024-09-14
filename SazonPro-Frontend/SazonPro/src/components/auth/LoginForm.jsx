import React from "react";

const LoginForm = () => {
  return (
    <form className="grid grid-rows-4 place-items-center p-5 w-full">
      <div className='flex flex-col pb-4 w-64'>
        <label className='pb-1 font-sans font-normal text-sm md:text-xl'>Your name:</label>
        <input
          className="h-10 w-full rounded-xl pl-2 bg-gray bg-opacity-40 text-sm md:text-base"
          placeholder="Enter your name"
        />
      </div>
      <div className='flex flex-col pb-4 w-64'>
        <label className="pb-1 font-sans font-normal  text-sm">Your email:</label>
        <input
          className="h-10 w-full rounded-xl pl-2 bg-gray bg-opacity-40 text-sm md:text-base"
          placeholder="Enter your email"
        />
      </div>
      <div className='flex flex-col pb-2 w-64'>
        <label className="pb-1 font-sans font-normal text-sm">Your password:</label>
        <input
          className='h-10 w-full rounded-xl pl-2 bg-gray bg-opacity-40 text-sm md:text-base'
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <input
          className="bg-primary rounded-md h-10 w-3/5 cursor-pointer font-sans font-semibold text-sm"
          type="submit"
          value="Signin"
        />
        <p className="text-sm text-center font-sans">
          already have an account? <a className='text-secondary' href="#">Signup</a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
