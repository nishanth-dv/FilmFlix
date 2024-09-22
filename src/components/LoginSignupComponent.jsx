import React, { useState, useRef } from "react";
import validateFormData from "../utils/formValidate";
import authenticate from "../utils/authentication";
import messages from "../utils/messages.json";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/redux/storeSlices/userSlice";

const LoginSignupComponent = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
  };

  const validateData = async () => {
    console.log(messages);
    const validateMessage = validateFormData(
      isSignIn ? "signin" : "signup",
      firstName.current?.value || null,
      lastName.current?.value || null,
      email.current?.value,
      password.current?.value
    );
    setErrorMessage(validateMessage);
    if (validateMessage) return;
    const authInfo = await authenticate(
      isSignIn,
      firstName.current?.value || null,
      lastName.current?.value || null,
      email.current?.value,
      password.current?.value
    );
    if (authInfo.userInfo) {
      const { uid, email, displayName } = authInfo.userInfo;
      dispatch(addUser({ uid, email, displayName }));
      navigate("/Browse");
    }
    if (authInfo.error)
      setErrorMessage(messages[authInfo.error?.errorCode] || "Error");
  };

  return (
    <div className="absolute top-1/4 left-[40%] p-10 bg-black w-1/4 text-white rounded-lg h-3/4 bg-opacity-85 font-semibold">
      <form
        className="flex flex-col"
        onSubmit={(event) => {
          event.preventDefault();
          validateData();
        }}
      >
        <p className="text-3xl mb-5">Sign In</p>
        {!isSignIn && (
          <>
            <input
              ref={firstName}
              required
              className="px-3 py-2 mb-5 bg-slate-800 font-normal"
              type="text"
              placeholder="Enter your First Name"
            />
            <input
              ref={lastName}
              required
              className="px-3 py-2 mb-5 bg-slate-800 font-normal"
              type="text"
              placeholder="Enter your Last Name"
            />
          </>
        )}
        <input
          ref={email}
          required
          className="px-3 py-2 mb-5 bg-slate-800 font-normal"
          type="email"
          placeholder="Email address"
        />
        <input
          ref={password}
          required
          className="px-3 py-2 mb-5 bg-slate-800 font-normal"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-600 px-3 py-2 mb-7 rounded-lg">
          {isSignIn ? "Login" : "Sign Up"}
        </button>
        {errorMessage && (
          <div className="py-4 px-3 mb-5 border border-red-600 bg-red-500 bg-opacity-50 rounded-lg flex items-center">
            <i className="fa-solid fa-triangle-exclamation text-xs text-white mr-2" />
            <p className="text-xs text-white">{errorMessage}</p>
          </div>
        )}
        <p className="text-slate-500 cursor-default my-7">
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
