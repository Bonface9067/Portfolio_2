import React from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Publications from './components/Sections/Publications';
import Organizations from './components/Sections/Organizations';
import PortfolioUpdates from './components/Sections/PortfolioUpdates';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Organizations />
        <PortfolioUpdates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;