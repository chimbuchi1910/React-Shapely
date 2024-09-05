import React from "react";
import "./Seo.css";
import image from "../../assets/images/photowork2.png";
const Seo = () => {
  return (
    <div>
      <div className="section2">
        <div className="sec2-parent">
          <div className="img2">
            <img src={image} alt="" />
          </div>
          <div className="seo">
            <h1>SEO Friendly</h1>
            <p className="lo">
              Loren Ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pulvinar luctus sem. eget porta orci. Maecenas molestie dui
              idmdiam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae
              ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus
              ac ligula id ultricies
            </p>
            <div className="read">READ MORE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seo;
