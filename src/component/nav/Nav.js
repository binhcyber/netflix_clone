import React, { useEffect, useState } from "react";
import LOGO from "../../assets/Logo.png";
import AVATAR from "../../assets/avatar.png";
import "./Nav.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/UserSlice";
import { auth } from "../../firebase/firebase";
function Nav() {
  const [scroll, setScroll] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const scrollNav = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
    return () => {
      window.removeEventListener("scroll", scrollNav);
    };
  }, []);
  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <div className="nav_content">
        <img className="nav_logo" src={LOGO} alt="logo" />
        <button
          onClick={() => {
            auth.signOut();
            dispatch(logOut());
            history.push("/");
          }}
          className="btn btn_subscribe"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Nav;
