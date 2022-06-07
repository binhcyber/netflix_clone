import React from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  return (
    <div className="login_content">
      <h1>Title</h1>
      <p>Description</p>
      <form className="login_form">
        <input className="login_input" placeholder="email" />
        <button
          className="btn btn_login"
          onClick={() => {
            history.push("/signIn");
          }}
        >
          GET STARTED
        </button>
      </form>
    </div>
  );
}
