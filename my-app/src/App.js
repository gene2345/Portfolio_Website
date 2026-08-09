import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

function App() {
  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "timeline" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition = element.offsetTop - navbarHeight - 12;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="site-shell">
      <Analytics />
      <Navbar />

      <header className="site-header">
        <div className="site-header-inner">
          <button
            className="brand-mark"
            onClick={() => scrollToSection("home")}
            type="button"
          >
            GENE EE
          </button>

          <nav className="top-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-content">
        <section id="home" className="section-block hero-section">
          <Home />
        </section>

        <section id="about" className="section-block">
          <About />
        </section>

        <section id="timeline" className="section-block">
          <Timeline />
        </section>

        <section id="projects" className="section-block">
          <Projects />
        </section>

        <section id="skills" className="section-block">
          <Skills />
        </section>

        <section id="contact" className="section-block">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
