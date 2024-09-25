import React, { useEffect, memo } from "react";
import logo from "../assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utils/redux/storeSlices/userSlice";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/Browse");
      }
      if (!user) {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubsribe();
  }, [dispatch, navigate]);

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
        <>
          <button
            className="font-bold text-lg text-white"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
};

export default memo(HeaderComponent);
