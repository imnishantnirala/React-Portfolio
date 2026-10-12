import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import VideoEditing from './components/VideoEditing';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface-50 text-surface-900 dark:bg-surface-950 dark:text-surface-100 overflow-x-clip transition-colors duration-300 selection:bg-primary-500/30 selection:text-primary-700 dark:selection:text-primary-200">
      <Header />
      <main id="main-content" tabIndex="-1" className="outline-none">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <VideoEditing />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
