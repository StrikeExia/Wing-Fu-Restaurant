import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Menu />
      <Footer />
    </Router>
  );
}

export default App;
