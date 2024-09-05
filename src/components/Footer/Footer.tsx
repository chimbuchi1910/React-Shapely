import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="foot">
        <p style={{ color: "whitesmoke" }}>
          Theme by <span>Bichoy</span> Powered by <span>WordPress</span>
        </p>
        <div className="fo">
          <div>
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
          </div>
          <div>
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
          </div>
          <div>
            <span>
              <i className="fa-brands fa-linkedin"></i>
            </span>
          </div>
          <div>
            <span>
              <i className="fa-brands fa-square-youtube"></i>
            </span>
          </div>
          <div>
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
