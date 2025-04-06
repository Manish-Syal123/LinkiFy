import Lottie from "lottie-react";
import React from "react";
import notfound from "../assets/lottie/notfound.json";
import erroranimation from "../assets/lottie/erroranimation.json";
import { Link, useLocation } from "react-router-dom";

const ErrorPage = ({ message }) => {
  const path = useLocation().pathname;
  return (
    <div>
      {/* <h1>{message}</h1>
      <hr /> */}
      {path === "/error" ? (
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-2xl font-bold">Opps! {message}</h1>
          <Lottie
            animationData={erroranimation}
            loop={true}
            autoplay={true}
            className="w-[90vw] h-[75vh] flex justify-center items-center m-auto -mt-6"
          />
        </div>
      ) : (
        <Lottie
          animationData={notfound}
          loop={true}
          autoplay={true}
          className="w-screen h-[75vh] flex justify-center items-center m-auto"
        />
      )}
      <button className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center m-auto">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
