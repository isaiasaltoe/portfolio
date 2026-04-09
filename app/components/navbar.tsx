"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center text-lg justify-center font-light px-8 text-[#525F7F] bg-[#F6F9FC]/80 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "py-5 shadow-lg" : "py-10"
      }`}
    >
      <ul className="flex gap-6 items-center">
        <li>
          <a href="#projects" className="hover:text-[#747FE0] transition-colors">
            Projetos
          </a>
        </li>
        <li>
          <a href="#experiences" className="hover:text-[#747FE0] transition-colors">
            Experiências
          </a>
        </li>
        <li>
          <a href="#aboutme" className="hover:text-[#747FE0] transition-colors">
            Sobre mim
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#747FE0] transition-colors">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
