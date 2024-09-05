import React from "react";
import "./Portfolio.css";
import image from "../../assets/images/photowork3.png"
const Portfolio = () => {
  return <div><div className="section3">
  <div className="sec3-parent">
    <div className="portt">
      <h1>Portfolio Section</h1>
      <p className="loren">
        Loren Ipsum dolor sit amet, consectetur adipiscing elit. Nam
        pulvinar luctus sem. eget porta orci. Maecenas molestie dui idmdiam
        feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et
        interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula
        id ultricies
      </p>
      <div className="read">READ MORE</div>
    </div>
    <div className="img3"><img src={image} alt="" /></div>
  </div>
</div></div>;
};

export default Portfolio;
