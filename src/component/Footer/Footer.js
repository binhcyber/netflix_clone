import React from "react";
import FOOTER from "../../assets/footer.png";
export default function Footer() {
  return (
    <div
      className="footer"
      style={{
        backgroundImage: `url("${FOOTER}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "300px",
      }}
    >
      <div className="footer_content">
        <h1 className="footer_title">Netflix</h1>
        <ul className="footer_list">
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Investor</a>
          </li>
          <li>
            <a>Jobs</a>
          </li>
          <li>
            <a>Account</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
