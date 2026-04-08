import Image from "next/image";
import { SiNextdotjs, SiTailwindcss, SiDocker, SiFigma, SiPhp, SiPostgresql, SiRuby, SiRubyonrails, SiBootstrap } from "react-icons/si";

export function Aboutme(){
    return(
        <main>
            <section id="aboutme" className="w-full flex flex-col items-center">
                  <h2 className="text-3xl md:text-4xl text-center my-16 md:my-35 text-[#747FE0] container">
                    Sobre mim
                  </h2>
                  <div className="conteudo-sobre-mim flex flex-col md:flex-row items-center justify-around w-full px-6 md:px-0 gap-10 md:gap-0">
                    <div className="foto flex justify-center items-center">
                      {/* Container da polaroid: rotação leve + sombra realista */}
                      <div className="rotate-3 hover:scale-101 transition-all duration-300 bg-white p-2 pb-10 md:p-3 md:pb-14 shadow-[4px_6px_20px_rgba(0,0,0,2)] rounded-sm">
                        {/* Área da foto dentro da polaroid */}
                        <div className="w-52 h-60 md:w-76.5 md:h-86.5 bg-gray-200 overflow-hidden">
                          <Image
                            src="/eu.png"
                            alt="Foto de perfil"
                            width={306}
                            height={346}
                            className="w-full h-full object-cover "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="texto w-full md:w-4/10 text-base md:text-xl font-light text-[#525F7F]">
                        <h1>
                          Sempre fui muito curioso desde criança. Essa curiosidade acabou me levando para o campo da Ciência da Computação.  Meu objetivo é construir uma carreira de sucesso, e eu sou muito dedicado a alcançar isso.  Se você acredita que podemos trabalhar juntos, entre em <a href="https://v360.io/" target="_blank" rel="noopener noreferrer" className="text-[#747FE0] hover:underline font-medium">contato</a>, eu estou sempre aberto a novas ideias e oportunidades de aprender! 
                        </h1>
                        <h1>Minhas principais tecnologias são: 
                          
                          <div className="flex text-4xl mt-3 gap-3"> 
                            <SiRuby key="Ruby" className="text-red-700" title="Ruby"/>
                            <SiRubyonrails  key="RubyOnRails" className="text-red-700" title="Ruby On Rails"/>
                            <SiNextdotjs  key="nextjs" className="text-black" title="NextJS"/>
                            <SiPostgresql  key="postgre" className="text-[#0064a5]" title="PostgreSQL"/>
                            <SiFigma key="figma" title="Figma" />
                            <SiBootstrap title="Bootstrap" />
                            
                          </div>  
                        </h1> 





                    </div>
                  </div>
                </section>
        </main>
    )
}