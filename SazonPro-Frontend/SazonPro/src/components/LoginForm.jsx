import React from "react";

const LoginForm = () => {
  return (
    <form className="grid grid-rows-3 gap-4 p-5">
      <div className="flex flex-col">
        <label>Your name:</label>
        <input
          className="rounded-lg h-8 w-11/12 pl-2"
          placeholder="Enter your name"
        />
      </div>

      <div className="flex flex-col">
        <label>Your email:</label>
        <input
          className="rounded-lg h-8 w-11/12 pl-2"
          placeholder="Enter your email"
        />
      </div>

      <div className="flex flex-col">
        <label>Your password:</label>
        <input
          className="rounded-lg h-8 w-11/12 pl-2"
          placeholder="Enter your password"
        />
      </div>
    </form>
  );
};

export default LoginForm;
