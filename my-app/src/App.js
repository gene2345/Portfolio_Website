import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="overflow-hidden">
      <Navbar/>
      <nav className="w-full bg-white shadow-md z-10 fixed top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-32 items-center">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <p className="text-4xl lg:text-4xl font-medium font-bold text-gray-900">My Portfolio</p>
              </div>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="lg:text-2xl text-gray-900 hover:text-pink-600 transition duration-300"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("timeline")}
                className="lg:text-2xl text-gray-900 hover:text-pink-600 transition duration-300"
              >
                Experiences
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="lg:text-2xl text-gray-900 hover:text-pink-600 transition duration-300"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="lg:text-2xl text-gray-900 hover:text-pink-600 transition duration-300"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="lg:text-2xl text-gray-900 hover:text-pink-600 transition duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16"> {/* Adjust padding-top to account for fixed navbar */}
        <div id="home" className="py-16">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="timeline">
          <Timeline />
        </div>

        <div id="projects" className="py-16">
          <Projects />
        </div>

        <div id="skills" className="py-16">
          <Skills />
        </div>

        <div id="contact"className="py-16">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
