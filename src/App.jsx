import './App.css';
import ToggleButton from './Components/ToggleButton';
import SideBar from './Components/SideBar';
import Landing from './Components/Landing';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ToTopBtn from './Components/ToTopBtn';
import { useState } from "react";

function App() {
  const [ toggleState, setToggleState ] = useState(false);

    function handleToggle() {
        setToggleState(toggleState => !toggleState);
    }

    let setToggleClass = toggleState ? 'show-sidebar' : '';
  
  return (
    <div className="App">
      <ToggleButton handleToggle={handleToggle} />

      <SideBar setToggleClass={setToggleClass} handleToggle={handleToggle} />
      <Landing />

      <main className='site-content_Container'>
        <section className="about_Section">
          <About />
        </section>

        <section className="skills_Section">
          <Skills />
        </section>

        <section className="projects_Section">
          <Projects />
        </section>
        
        <section className="contact_Section">
          <Contact />
        </section>
      </main>

      <Footer />

      <section className='to-top-btn_Section'>
        <ToTopBtn />
      </section>
    </div>
  );
}

export default App;