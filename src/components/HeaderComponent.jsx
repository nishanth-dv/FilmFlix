import React, { useEffect, memo } from "react";
import logo from "../assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utils/redux/storeSlices/userSlice";
import { toggleView } from "../utils/redux/storeSlices/gptSlice";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const gpt = useSelector((state) => state.gpt);

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

  const handleToggleView = () => {
    dispatch(toggleView());
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex flex-col justify-between md:flex-row">
      <img className="w-40 mx-auto h-16 md:mx-0 md:w-48 md:h-auto" src={logo} alt="logo" />
      {user && (
        <div className="px-8 flex md:py-2">
          <button
            className="font-xs text-white px-4 py-2 my-4 mr-4 bg-purple-800 rounded-lg hover:bg-purple-900"
            onClick={handleToggleView}
          >
            {gpt.showGpt ? (
              <i className="fa-solid fa-backward mr-2" />
            ) : (
              <i className="fa-solid fa-robot mr-2" />
            )}
            {gpt.showGpt ? "Back to Browse" : "Ask Flix AI"}
          </button>
          <button
            className="text-sm text-white px-4 my-4 bg-red-600 rounded-lg hover:bg-red-800"
            onClick={handleSignout}
          >
            <i className="fa-solid fa-arrow-right-from-bracket mr-2" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(HeaderComponent);
