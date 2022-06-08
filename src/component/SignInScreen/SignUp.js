import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signIn, signUp } from "../redux/UserSlice";

export default function SignUp() {
  const [messError, setMessError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(emailValue, passwordValue)
      .then((user) => {
        if (user.additionalUserInfo.isNewUser) {
          history.push("/signIn");
          return;
        }
      })
      .catch((error) => {
        setMessError(error.message);
      });
  };

  return (
    <div className="signUp">
      <form onSubmit={handleSubmit} className="signUp_content">
        <h2 className="signUp_title">Create Account</h2>
        <input ref={email} className="signUp_email" placeholder="email" />
        <small className="signUp_messError">{messError}</small>
        <input
          ref={password}
          className="signUp_password"
          placeholder="password"
        />
        <button className="signUp_button">Sign Up</button>
      </form>
    </div>
  );
}
