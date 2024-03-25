import { ImLinkedin, ImGithub } from "react-icons/im";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoFigma } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export function getNavbarDetails() {
  return [
    { name: "Home", url: "/home" },
    { name: "About", url: "/about" },
    { name: "Projects", url: "/projects" },
    { name: "Contact", url: "/contact" },
  ];
}

export function socialIcons() {
  return [
    { icon: <ImLinkedin />, url: "https://www.linkedin.com/in/kamalesh11/" },
    { icon: <ImGithub />, url: "https://github.com/kamalss11" },
  ];
}

export function techIcons() {
  return [
    { icon: <ImHtmlFive />, title: "HTML 5" },
    { icon: <FaCss3Alt />, title: "CSS" },
    { icon: <RiJavascriptFill />, title: "JavaScript" },
    { icon: <FaReact />, title: "React" },
    { icon: <SiMui />, title: "Material UI" },
    { icon: <BsBootstrapFill />, title: "Bootstrap" },
    { icon: <IoLogoFigma />, title: "Figma" },
    { icon: <FaGitAlt />, title: "Git" },
  ];
}

export function footerIcons() {
  return [
    { icon: <ImLinkedin />, url: "https://www.linkedin.com/in/kamalesh11/" },
    { icon: <BiLogoGmail />, url: "mailto:kamalesh1132002@gmail.com" },
    {
      icon: <RiInstagramFill />,
      url: "https://www.instagram.com/_kamal.11_/",
    },
  ];
}
