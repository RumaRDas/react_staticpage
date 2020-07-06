import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
