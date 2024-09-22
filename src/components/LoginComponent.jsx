import React, { useEffect } from "react";
import backgroundImage from "../assets/backgroung.jpg";
import HeaderComponent from "./HeaderComponent";
import LoginSignupComponent from "./LoginSignupComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/redux/storeSlices/userSlice";

const LoginComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) dispatch(removeUser());
    });
  }, [dispatch]);

  return (
    <div>
      <HeaderComponent />
      <div>
        <img src={backgroundImage} alt="bg-img" />
      </div>
      <LoginSignupComponent />
    </div>
  );
};

export default LoginComponent;
