import React from "react";

const LoginForm = () => {
  return (
    <form className="grid grid-rows-4 place-items-center p-5 w-full">
      <div className='flex flex-col pb-4 w-64'>
        <label className='pl-2 pb-1 font-sans font-light text-sm md:text-xl'>Your name:</label>
        <input
          className="rounded-lg h-10 w-full pl-2 bg-gray text-sm md:text-xl"
          placeholder="Enter your name"
        />
      </div>
      <div className='flex flex-col pb-4 w-64'>
        <label className="pl-2 pb-1 font-sans font-light text-sm">Your email:</label>
        <input
          className="rounded-lg h-10 w-full pl-2 bg-gray text-sm md:text-xl"
          placeholder="Enter your email"
        />
      </div>
      <div className='flex flex-col pb-2 w-64'>
        <label className="pl-2 pb-1 font-sans font-light text-sm">Your password:</label>
        <input
          className="rounded-lg h-10 w-full pl-2 bg-gray text-sm"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <input
          className="bg-primary rounded-md h-8 w-3/5 cursor-pointer font-sans font-semibold text-sm"
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
