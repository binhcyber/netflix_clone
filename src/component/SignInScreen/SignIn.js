import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import localstorageserv from "../../LocalStorage/LocalStorage";
import { signIn } from "../redux/UserSlice";
export default function SignIn() {
  const [messErr, setMessErr] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    auth
      .signInWithEmailAndPassword(emailValue, passwordValue)
      .then((userSignIn) => {
        if (!userSignIn.additionalUserInfo.isNewUser) {
          dispatch(
            signIn({
              uid: userSignIn.user.uid,
              email: userSignIn.user.email,
            })
          );
          history.push("/home");
        }
      })
      .catch((error) => {
        setMessErr(error.message);
      });
  };
  return (
    <div className="signIn">
      <form onSubmit={handleSubmit} className="signIn_content">
        <h2 className="signIn_title">Sign In</h2>
        <input ref={email} className="signIn_email" placeholder="email" />
        <input
          ref={password}
          className="signIn_password"
          placeholder="password"
        />
        <button className="signIn_button">Sign In</button>
        <div>
          <span className="signIn_gray">New to NetFlix? </span>
          <span
            onClick={() => {
              history.push("/signUp");
            }}
            className="signIn_now"
          >
            Sign Up Now
          </span>
        </div>
        <span className="signIn_messErr">{messErr}</span>
      </form>
    </div>
  );
}
