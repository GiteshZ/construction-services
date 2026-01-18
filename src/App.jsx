import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ProjectDetail from './components/pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';

const Home = () => (
  <>
    <Hero />
    <Services />
    <Gallery />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
