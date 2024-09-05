import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return <div><div className="parent-div">
  <div className="parent">
    <div className="sharply">Shapely Demo</div>
    <div className="parent-div-home-shop">
      <div className="home">HOME</div>
      <div className="blog">BLOG</div>
      <div className="port">PORTFOLIO</div>
      <div className="about-us">ABOUT US</div>
      <div className="level">
        <select>
          <option>LEVEL1</option>
          <option>LEVEL2</option>
          <option>LEVEL3</option>
        </select>
      </div>
      <div className="shop">SHOP</div>
    </div>
    <div className="i"><i className="fa fa-search" aria-hidden="true"></i></div>
  </div>
</div></div>;
};

export default Navbar;
