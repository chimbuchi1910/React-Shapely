import React from "react";
import "./Limitless.css";
import image from "../../assets/images/photowork5.jpg";
const Limitless = () => {
  return (
    <div>
      <div className="section5">
        <div className="sec5-parent">
          <h1 className="limit">Limitless Options</h1>
          <p className="lor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit
            error nostrum reiciendis nemo reprehenderit iusto quod numquam,
            provident minima quisquam cumque unde dolorum modi totam excepturi
            rem facilis necessitatibus.
          </p>
          <div className="down">DOWNLOAD NOW</div>
          <div className="img5">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Limitless;
