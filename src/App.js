import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Homepage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
