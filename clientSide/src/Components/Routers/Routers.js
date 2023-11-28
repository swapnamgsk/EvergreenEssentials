import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router';
import { Home } from '../Home/index';
import { Product } from '../Product/Product';
import About from '../About/About';
import PlantDetails from '../PlantDetails/PlantDetails';
// import Category from '../Category/Category';
import Heart from '../Category/Heart';
import Brain from '../Category/Brain';
import Kidney from '../Category/Kidney';
import Nextpage from '../PlantDetails/Nextpage';


function Routess() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/plants" element={<Product />} />
          {/* <Route path="/category" element={<Category />} /> */}
          <Route path = "/category/heart" element = {< Heart/>} />
          <Route path = "/category/brain" element = {< Brain/>} />
          <Route path = "/category/kidney" element = {< Kidney/>} />
          <Route path="/plants/:id" element={<PlantDetails />} />
          <Route path="/nextPage/:id" element={<Nextpage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Routess;
