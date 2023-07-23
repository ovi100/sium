"use client";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Element name="about" className="about h-screen md:h-full p-5">
        <About />
      </Element>
      <Element name="resume" className="resume p-5">
        <Resume />
      </Element>
      <Element
        name="extra & co-curricular activities"
        className="activities p-5"
      >
        <Works />
      </Element>
      <Element name="skills" className="skill p-5">
        <Skills />
      </Element>

      <Element name="certification" className="certification p-5">
        <Certificates />
      </Element>
      <Element name="testimonials" className="testimonials p-5">
        <Testimonials />
      </Element>
      <Element name="contact" className="contact p-5">
        <Contact />
      </Element>
      {isVisible && (
        <button
          className="bg-blue-500 text-white rounded-full fixed bottom-20 right-5 capitalize p-2 hover:bg-blue-400"
          onClick={() => scrollToTop()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
    </>
  );
}
