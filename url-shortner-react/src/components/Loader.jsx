import Lottie from "lottie-react";
import React from "react";
import loadinganimation from "../assets/lottie/loadinganimation.json";
const Loader = () => {
  return (
    <Lottie
      animationData={loadinganimation}
      loop={true}
      className="w-[90vw] h-screen flex justify-center items-center m-auto"
    />
  );
};

export default Loader;
