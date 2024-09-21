import React, { useEffect } from "react";
import backgroundImage from "../assets/backgroung.jpg";
import HeaderComponent from "./HeaderComponent";
import LoginSignupComponent from "./LoginSignupComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/redux/storeSlices/userSlice";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch, navigate]);

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
