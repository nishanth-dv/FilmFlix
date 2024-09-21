import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { cloneDeep } from "lodash";

const authenticate = (isExistingUser, firstName, lastName, email, password) => {
  const authInfo = {
    userInfo: null,
    error: null,
  };
  return new Promise((resolve, reject) => {
    if (isExistingUser)
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          authInfo.userInfo = cloneDeep(user);
          resolve(authInfo);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          authInfo.error = { errorCode, errorMessage };
          resolve(authInfo);
        });
    else
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          authInfo.userInfo = cloneDeep(user);
          resolve(authInfo);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          authInfo.error = { errorCode, errorMessage };
          resolve(authInfo);
        });
  });
};

export default authenticate;
