import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import OpenSource from "@/components/opensourec";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = async (container: Container | undefined) => {
    console.log("Particles loaded:", container);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "open-source", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: false, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: {
              value: theme === "dark" ? "#39FF14" : "#317fe6ff", 
            },
            links: {
              color: theme === "dark" ? "#39FF14" : "#317fe6ff",
              distance: 150,
              enable: true,
              opacity: 0.25,
              width: 1.2,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 80,
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <Navigation
        activeSection={activeSection}
        theme={theme}
        setTheme={setTheme}
      />

      <main className="relative z-10">
        <Hero />
        <About theme={theme as "light" | "dark"}/>
        <Skills />
        <Projects theme={theme as "light" | "dark"} />
        <OpenSource />
        <Contact theme={theme as "light" | "dark"} />
      </main>
    </div>
  );
};

export default Index;
