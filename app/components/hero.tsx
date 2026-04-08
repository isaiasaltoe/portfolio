"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function Hero() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Olá, meu nome é Isaías :) "],
      typeSpeed: 120,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-30 font-normal text-[#747FE0]">
      <h1 className="text-3xl sm:text-5xl md:text-7xl">
        &gt; <span ref={el} />
      </h1>
      <p className="text-[#525F7F] text-base md:text-xl mt-10 md:mt-20 font-light">
        Sou estudante de Ciência da Computação na UFES e desenvolvedor Full Stack na{" "}
        <a href="https://v360.io/" target="_blank" rel="noopener noreferrer" className="text-[#747FE0] hover:underline font-medium">V360</a>. <br /> {" "}
        Gosto de solucionar (e as vezes criar) problemas.{" "} <br />
        Confira alguns dos meus{" "}
        <a href="#projects" className="text-[#747FE0] hover:underline font-medium">projetos</a> abaixo.
      </p>
    </section>
  );
}
