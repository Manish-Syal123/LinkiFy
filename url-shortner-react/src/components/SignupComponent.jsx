import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";

const SignupComponent = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouch",
  });

  const registerHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post(
        "/api/auth/public/register",
        data
      );
      reset();
      navigate("/login");
      toast.success("Registeration Successful!");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed!");
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="mx-auto flex h-screen -mt-10 max-w-lg flex-col md:max-w-none md:flex-row md:pr-10 gap-20 pl-10">
      <div className="max-w-md rounded-3xl bg-gradient-to-t from-blue-700 via-blue-700 to-blue-600 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
        <p className="mb-20 font-bold tracking-wider">/LinkiFy</p>
        <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
          Start your <br />
          journey with us
        </p>
        <p className="mb-28 leading-relaxed text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi
          voluptas a officia. Omnis.
        </p>
        <div className="bg-blue-600/80 rounded-2xl px-4 py-8">
          <p className="mb-3 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ea
            voluptates sapiente!
          </p>
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="/images/dummyProfile.jpg"
              alt="Simon Lewis"
            />
            <p className="ml-4 w-56">
              <strong className="block font-medium">Simon Lewis</strong>
              <span className="text-xs text-gray-200">
                {" "}
                Published 12 Bestsellers{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-20 w-lg">
        <h2 className="mb-2 text-3xl font-bold">Sign Up</h2>
        <p className="mb-10 block font-bold text-gray-600">
          Have an account?{" "}
          <Link
            className="font-semibold hover:underline hover:text-black no-underline"
            to="/login"
          >
            <span className="text-blue-400"> Login</span>
          </Link>
        </p>
        <p className="mb-1 font-medium text-gray-500">As</p>
        <div className="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
          {["User"].map((option, index) => (
            <div
              key={index}
              className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700"
            >
              <input
                className="peer hidden"
                type="radio"
                name="radio"
                id={`radio${index}`}
                defaultChecked={index === 0}
              />
              <label
                className="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                htmlFor={`radio${index}`}
              ></label>
              <div className="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
              <span className="pointer-events-none z-10">{option}</span>
            </div>
          ))}
        </div>
        {/* Form starts here */}
        <form onSubmit={handleSubmit(registerHandler)} className="w-full">
          <div className="mb-4 flex flex-col">
            <TextField
              label="UserName"
              required
              id="username"
              type="text"
              message="*Username is required"
              placeholder="Type your username"
              register={register}
              errors={errors}
              className="w-full border-gray-300 bg-[#f9fafb] px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <TextField
              label="Email"
              required
              id="email"
              type="email"
              message="*Email is required"
              placeholder="Type your email"
              register={register}
              errors={errors}
              className="w-full border-gray-300 bg-[#f9fafb] px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="mb-4 flex flex-col">
            <TextField
              label="Password"
              required
              id="password"
              type="password"
              message="*Password is required"
              placeholder="Type your password"
              register={register}
              min={6}
              errors={errors}
              className="w-full  border-gray-300 bg-[#f9fafb] px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button
            disabled={loader}
            type="submit"
            className="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
          >
            Sign Up
          </button>
        </form>
        {/* Form end here */}
      </div>
    </div>
  );
};

export default SignupComponent;
