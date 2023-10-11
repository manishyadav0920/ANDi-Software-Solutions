import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Partner from './Component/Partner';
import Error from './Component/Error';
import List from "./Component/List";
import Footer from "./Component/Footer";

const App = () => {
  return(
    <>
      <List/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/contact" Component={Contact} />
        <Route path="/partner" Component={Partner} />
        <Route Component={Error} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;