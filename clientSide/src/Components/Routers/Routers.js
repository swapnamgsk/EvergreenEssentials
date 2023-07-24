import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';
import { Route, Routes } from 'react-router';
import { Home } from '../Home/Home.js';
import { Product } from '../Product/Product.js';


function Routess() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/plants" Component={Product} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Routess;
