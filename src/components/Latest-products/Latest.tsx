import React from "react";
import "./Latest.css";
import im1 from "../../assets/images/photowork6.jpg";
import im2 from "../../assets/images/photowork7.jpg";
import im3 from "../../assets/images/photowork8.jpg";
import im4 from "../../assets/images/photowork9.jpg";
import im5 from "../../assets/images/photowork10.jpg";
import im6 from "../../assets/images/photowork11.jpg";
import im7 from "../../assets/images/photowork12.jpg";
import im8 from "../../assets/images/photowork13.jpg";
import im9 from "../../assets/images/photowork14.jpg";
import im10 from "../../assets/images/photowork15.jpg";
const Latest = () => {
  return (
    <div>
      <div className="section6">
        <h2>Our Latest Projects</h2>
        <p>Here is out latest projects. You'll love them!</p>
        <div className="product-section">
          <div>
            <img src={im1} alt="" />
            <p className="im1">Image1</p>
          </div>
          <div>
            <img src={im2} alt="" />
            <p className="im2">Image2</p>
          </div>
          <div>
            <img src={im3} alt="" />
            <p className="im3">Image3</p>
          </div>
          <div>
            <img src={im4} alt="" />
            <p className="im4">Image4</p>
          </div>
          <div>
            <img src={im5} alt="" />
            <p className="im5">Image5</p>
          </div>
          <div>
            <img src={im6} alt="" />
            <p className="im6">Image6</p>
          </div>
          <div>
            <img src={im7} alt="" />
            <p className="im7">Image7</p>
          </div>
          <div>
            <img src={im8} alt="" />
            <p className="im8">Image8</p>
          </div>
          <div>
            <img src={im9} alt="" />
            <p className="im9">Image9</p>
          </div>
          <div>
            <img src={im10} alt="" />
            <p className="im10">Image10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
