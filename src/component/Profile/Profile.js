import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUser } from "../redux/UserSlice";
import AVATAR from "../../assets/avatar.png";
import { auth } from "../../firebase/firebase";
import { useHistory } from "react-router-dom";
export default function Profile() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="profile">
      <h2 className="profile_title">Edit Profile</h2>
      <div className="profile_content">
        <img className="profile_img" src={AVATAR} />
        <div className="profile_decs">
          <h4 className="profile_email">{user?.email}</h4>
          <h3>Plans (Current Plan: premium)</h3>
          <p>Renewal day: 04/03/2022</p>
          <div className="profile_subcribe">
            <div className="profile_package">
              <div>
                <p>Netflix Standard</p>
                <small>1080p</small>
              </div>
              <button className="btn btn_subscribe">Subscribe</button>
            </div>
            <div className="profile_package">
              <div>
                <p>Netflix Basic</p>
                <small>480p</small>
              </div>
              <button className="btn btn_subscribe">Subscribe</button>
            </div>
            <div className="profile_package">
              <div>
                <p>Netflix Premium</p>
                <small>4k+HDR</small>
              </div>
              <button className="btn_current">Current Package</button>
            </div>
          </div>
          <button
            onClick={() => {
              auth.signOut();
              dispatch(logOut());
              history.push("/");
            }}
            className="profile_signOut"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
