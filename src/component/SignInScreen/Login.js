import React from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  return (
    <div className="login_content">
      <h3>Welcome back!</h3>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <p>Watch anywhere. Cancel anytime</p>
      <button
        className="btn btn_login"
        onClick={() => {
          history.push("/signUp");
        }}
      >
        Sign Up
      </button>
    </div>
  );
}
