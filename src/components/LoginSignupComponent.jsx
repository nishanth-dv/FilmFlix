import React, { useState } from "react";

const LoginSignupComponent = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="absolute top-1/4 left-[40%] p-10 bg-black w-1/4 text-white rounded-lg h-3/5 bg-opacity-85 font-semibold">
      <form className="flex flex-col">
        <p className="text-3xl mb-5">Sign In</p>
        {!isSignIn && (
          <input
            className="px-3 py-2 mb-5 bg-slate-800"
            type="text"
            placeholder="Enter your Full Name"
          />
        )}
        <input
          className="px-3 py-2 mb-5 bg-slate-800"
          type="email"
          placeholder="Enter your E-Mail address"
        />
        <input
          className="px-3 py-2 mb-5 bg-slate-800"
          type="password"
          placeholder="Enter your password"
        />
        <button className="bg-red-600 px-3 py-2 mb-7 rounded-lg">
          {isSignIn ? "Login" : "Sign Up"}
        </button>
        <p className="text-slate-500 cursor-default">
          {isSignIn ? "New here?" : "Already a member?"}
          <span
            className="font-semibold ml-3 text-white hover:text-slate-500 cursor-pointer"
            onClick={toggleForm}
          >
            {isSignIn ? "Sign up now" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginSignupComponent;
