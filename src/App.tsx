import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./screens/LoginScreen/Login";
import About_Us from "./components/AboutUs/About_Us";
import ReviewCard from "./components/Card/Card";
import SignUp from "./screens/SignUp/SignUp";
import UpdateUser from "./screens/UpdateUserProfile/UpdateUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/about-us" element={<About_Us />} />
          <Route path="/Card" element={<ReviewCard />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/UpdateUser" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
