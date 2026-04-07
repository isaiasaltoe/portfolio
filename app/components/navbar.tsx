"use client";

import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center text-lg justify-center font-light px-8 py-10 text-[#525F7F]">
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
