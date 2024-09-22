import React from "react";
import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between">
      <img className="w-48 radiant" src={logo} alt="logo" />
      {user && (
        <button
          className="font-bold text-lg text-white"
          onClick={handleSignout}
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default HeaderComponent;
