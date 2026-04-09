"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
      {/* Botão hambúrguer — visível apenas em telas pequenas */}
      <button
        className="md:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        <span
          className={`block w-6 h-0.5 bg-[#525F7F] transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#525F7F] transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#525F7F] transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Links — desktop: inline, mobile: overlay fullscreen */}
      <ul
        className={`md:flex md:gap-6 md:static md:bg-transparent md:flex-row md:items-center md:w-auto md:h-auto md:p-0
          ${
            isOpen
              ? "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#F6F9FC] text-2xl"
              : "hidden"
          }`}
      >
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[#747FE0] transition-colors">
            Projetos
          </a>
        </li>
        <li>
          <a href="#experiences" onClick={() => setIsOpen(false)} className="hover:text-[#747FE0] transition-colors">
            Experiências
          </a>
        </li>
        <li>
          <a href="#aboutme" onClick={() => setIsOpen(false)} className="hover:text-[#747FE0] transition-colors">
            Sobre mim
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#747FE0] transition-colors">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
