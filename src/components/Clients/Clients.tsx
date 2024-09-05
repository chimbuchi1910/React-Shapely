import React from "react";
import "./Clients.css";
import im1 from "../../assets/images/colorlib-logo.png";
import im2 from "../../assets/images/html5-logo.png";
import im3 from "../../assets/images/css-logo.png";
import im4 from "../../assets/images/js-logo.png";
import im5 from "../../assets/images/less-logo.png";
import im6 from "../../assets/images/sass-logo.png";
import im7 from "../../assets/images/adobe-logo.png";
import im8 from "../../assets/images/bootstrap-logo.jpg";
import im9 from "../../assets/images/facebook-logo.png";
const Clients = () => {
  return (
    <div>
      <div className="cli">
        <h1 className="clien">Our Main Client</h1>

        <div className="logo">
          <div>
            <img src={im1} alt="" />
          </div>
          <div>
            <img src={im2} alt="" />
          </div>
          <div>
            <img src={im3} alt="" />
          </div>
          <div>
            <img src={im4} alt="" />
          </div>
          <div>
            <img src={im5} alt="" />
          </div>
          <div>
            <img src={im6} alt="" />
          </div>
          <div>
            <img src={im7} alt="" />
          </div>
          <div>
            <img src={im8} alt="" />
          </div>
          <div>
            <img src={im9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
