import './App.css';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home/Home';
import Shop from './Component/Shop/Shop';
import Blog from './Component/Blog/Blog';
import Contactus from './Component/Contactus/Contactus';
import About from './Component/AboutUs/About';
// https://htmldemo.net/safira/safira/index.html
function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
