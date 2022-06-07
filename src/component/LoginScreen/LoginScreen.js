import React, { useState } from "react";
import Login from "../SignInScreen/Login";
import LOGIN_NAV from "../../assets/Logo.png";
import { useHistory } from "react-router-dom";

export default function LoginScreen({ Component }) {
  const history = useHistory();
  return (
    <div className="login">
      <div className="login_nav">
        <img className="login_nav_logo" src={LOGIN_NAV} />
        <button
          onClick={() => {
            history.push("/signIn");
          }}
          className="btn btn_secondary"
        >
          Sign in
        </button>
      </div>
      <Component />
    </div>
  );
}
