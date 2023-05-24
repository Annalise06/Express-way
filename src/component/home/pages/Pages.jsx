import React from "react";
import Header from "../../common/Header";
import Home from "../Home/Home";
import { Route, Routes } from "react-router-dom";
import Test from "../Test";
import Footer from "../../common/Footer";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Receipt from "../../common/Receipt";
import Admin from "../../Admin/Admin";

const Pages = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="test" element={<Test />} />
        <Route path="/confirm" element={<Receipt />} />{" "}
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Pages;
