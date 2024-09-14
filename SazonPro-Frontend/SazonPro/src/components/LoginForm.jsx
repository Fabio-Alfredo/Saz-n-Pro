import React from "react";

const LoginForm = () => {
  return (
    <form className="grid grid-rows-4 place-items-center gap-6 p-5">
      <div className="flex flex-col">
        <label className="pl-2">Your name:</label>
        <input
          className="rounded-lg h-8 w-11/12 pl-2 bg-gray mx-auto"
          placeholder="Enter your name"
        />
      </div>

      <div className="flex flex-col">
        <label className="pl-2">Your email:</label>
        <input
          className="rounded-lg h-8 w-11/12 pl-2 bg-gray mx-auto"
          placeholder="Enter your email"
        />
      </div>

      <div className="flex flex-col">
        <label className="pl-2">Your password:</label>
        <input
          className="rounded-lg h-8 w-11/12 pl-2 bg-gray mx-auto"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <input
        className="bg-primary p-1 rounded-md h-8 w-3/5 cursor-pointer"
        type="submit"
        value="Signin"
      />
    </form>
  );
};

export default LoginForm;
