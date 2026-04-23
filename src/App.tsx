import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import ResearchVision from './components/Sections/ResearchVision';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Publications from './components/Sections/Publications';
import Organizations from './components/Sections/Organizations';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <ResearchVision />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Organizations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
