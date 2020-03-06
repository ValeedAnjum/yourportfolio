import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Masthead from './components/Masthead/Masthead';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PortfolioModel from './components/ModelManager/PortfolioModel';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Masthead />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      
    </React.Fragment>
  );
}

export default App;
