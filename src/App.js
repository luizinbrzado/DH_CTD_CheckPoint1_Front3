import About from './components/About';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import ScrollAnimation from 'react-animate-on-scroll';
import Skills from './components/Skills';
import Footer from './components/Footer';
import "animate.css";
import './App.scss';

function App() {
  return (
    <>
      <ScrollAnimation duration={2} animateIn="animate__fadeIn" animateOnce>
        <Header />
        <div className="app d-flex flex-column align-items-center p-3">
          <Presentation />
          <About />
          <Projects />
          <Skills />
        </div>
        <Footer />
      </ScrollAnimation>
    </>
  );
}

export default App;
