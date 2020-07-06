import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testmonial from "./components/Testmonial";
import Map from "./components/Map";
import Pricing from './components/Pricing';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testmonial />
      <Pricing />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
