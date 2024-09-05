import React from "react";
import ResponsiveBar from "../../components/Nav-bar2/Nav-bar2";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Seo from "../../components/Seo-friendly/Seo";
import Portfolio from "../../components/Portfolio/Portfolio";
import Parallax from "../../components/Parallax/Parallax";
import Limitless from "../../components/Limitless/Limitless";
import Latest from "../../components/Latest-products/Latest";
import Testimonial from "../../components/Testimonial/Testimonial";
import Clients from "../../components/Clients/Clients";
import Wordpress from "../../components/Wordpress/Wordpress";
import Footer from "../../components/Footer/Footer";
import Rough from "../../components/RoughJavasript/Rough";
import Product from "../../components/RoughJavasript/Product";

const Home = () => {
  return (
    <div>
      <Product />
      <Rough />
      <ResponsiveBar />
      {/* <Navbar />
      {/* <Hero />
      <Seo />
      <Portfolio />
      <Parallax />
      <Limitless />
      <Latest />
      <Testimonial />
      <Clients />
      <Wordpress />
      <Footer /> */}
    </div>
  );
};

export default Home;
