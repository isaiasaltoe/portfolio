
import { CgClipboard, CgMail, CgPlayPauseR } from "react-icons/cg";
import { SiGithub } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiPhone } from "react-icons/ti";
export function Contact(){
    return(
    <section id="projects" className="w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl text-center my-16 md:my-35 text-[#747FE0] container">
        Contato
      </h2>
        <div className="flex flex-col md:flex-row flex-wrap items-center gap-5 mb-20 md:mb-35 px-6">
            <a href="https://www.linkedin.com/in/isaiasaltoe/" target="_blank" rel="noopener noreferrer" className="social hover:text-[#747FE0] transition-colors  text-2xl font-light flex text-[#525F7F] gap-1">
                <SlSocialLinkedin className="text-3xl" title="LinkedIn"/>
                <span className="flex items-center ">linkedin/in/isaiasaltoe</span>
            </a>
            <a href="https://github.com/isaiasaltoe" target="_blank" rel="noopener noreferrer" className="social hover:text-[#747FE0] transition-colors text-2xl font-light flex text-[#525F7F] gap-1">
                <SiGithub className="text-3xl" title="GitHub"/>
                <span className="flex items-center">github.com/isaiasaltoe</span>
            </a>
            <a href="https://wa.me/5528992723833" target="_blank" className="social hover:text-[#747FE0] transition-colors text-2xl font-light flex text-[#525F7F] gap-1">
                <TiPhone className="text-3xl" title="Phone"/>
                <span className="flex items-center">(28)99272-3833</span>
            </a>
            <a href="mailto:isaiasaltoe7@gmail.com" className="social hover:text-[#747FE0] transition-colors text-2xl font-light flex text-[#525F7F] gap-1">
                <CgMail className="text-3xl" title="Email"/>
                <span className="flex items-center">isaiasaltoe7@gmail.com</span>
            </a>
            <a href="https://drive.google.com/file/d/1HNOFXVOzt9xPUUHVcH5_YWNvp_5uHKt2/view" target="_blank" className="social hover:text-[#747FE0] transition-colors text-2xl font-light flex text-[#525F7F] gap-1">
                <CgClipboard className="text-3xl" title="My resume"/>
                <span className="flex items-center">My resume</span>
            </a>
        </div>
    </section>
    )
}