import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MultiCarousel from "./components/MultiCarousel";
import List from "./components/List";
import Categories from "./components/Categories";


const App = () => {
  return <div>
    <Navbar/>
    <Hero/>
    <MultiCarousel/>
    <List/>
    <Categories/>
  </div>;
};

export default App;
