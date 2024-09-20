import React from "react";
import { useForm } from "../../hooks/useForm"
import { Login } from "../../service/AuthService"
import Swal from "sweetalert2";

const LoginForm = () => {

  const { email, password, handleInputChange } = useForm({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const data = {
        email,
        password
      }
      const res = await Login(data);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1000
      });
      console.log(res)
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${e.error}`,
      });
    }
  }


  return (
    <form className="grid grid-rows-3 place-items-center p-5 w-full">
      <div className='flex flex-col pb-4 w-64'>
        <label className="pb-1 font-sans font-normal text-sm md:text-base">Your email:</label>
        <input
          value={email}
          onChange={handleInputChange}
          name="email"
          type="email"
          className="h-10 w-full rounded-xl pl-2 bg-gray bg-opacity-40 text-sm md:text-base"
          placeholder="Enter your email"
        />
      </div>
      <div className='flex flex-col pb-2 w-64'>
        <label className="pb-1 font-sans font-normal text-sm md:text-base">Your password:</label>
        <input
          value={password}
          onChange={handleInputChange}
          name="password"
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
          onClick={handleSubmit}
        />
        <p className="text-sm text-center font-sans">
          already have an account? <a className='text-secondary hover:underline visited:text-tertiary' href="#">Signup</a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
