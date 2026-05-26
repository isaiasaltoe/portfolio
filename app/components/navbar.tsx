"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row md:items-center md:justify-center font-light px-8 text-[#525F7F] bg-[#F6F9FC]/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "py-4 md:py-5 shadow-lg" : "py-6 md:py-10"
      }`}
    >
      <div className="flex justify-between items-center w-full md:w-auto md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-[#525F7F] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.25' : ''}`} />
            <span className={`block h-0.5 w-full bg-[#525F7F] transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-0.5 w-full bg-[#525F7F] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.25' : ''}`} />
          </div>
        </button>
      </div>

      <ul className={`${
        isOpen ? "flex" : "hidden"
      } md:flex flex-col md:flex-row gap-6 md:gap-6 items-center mt-6 md:mt-0 text-base md:text-lg w-full md:w-auto pb-4 md:pb-0`}
      >
        <li className="w-full text-center md:w-auto">
          <a href="#projects" className="block hover:text-[#747FE0] transition-colors py-2 md:py-0" onClick={() => setIsOpen(false)}>
            Projetos
          </a>
        </li>
        <li className="w-full text-center md:w-auto">
          <a href="#experiences" className="block hover:text-[#747FE0] transition-colors py-2 md:py-0" onClick={() => setIsOpen(false)}>
            Experiências
          </a>
        </li>
        <li className="w-full text-center md:w-auto">
          <a href="#aboutme" className="block hover:text-[#747FE0] transition-colors py-2 md:py-0" onClick={() => setIsOpen(false)}>
            Sobre mim
          </a>
        </li>
        <li className="w-full text-center md:w-auto">
          <a href="#contact" className="block hover:text-[#747FE0] transition-colors py-2 md:py-0" onClick={() => setIsOpen(false)}>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
