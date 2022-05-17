import netflixCloneImg from "./img/Netflix-clone.gif"
import linkedinImg from "./img/linkedin.png"
import twitterImg from "./img/twitter.png"
import gitImg from "./img/git.png"
import whatsappImg from "./img/whatsapp.png"

export interface project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

export interface contactOptions {
  description: string;
  image: string;
  link: string;
}

export const skills= [
  "VueJs",
  "ReactJS",
  "NodeJs",
  "Django",
  "SQL",
  "Git",
  "Python",
  ".Net",
  "JavaScript (ES6+)",
  "TypeScript",
  "Tailwind",
  "Sass",
];

export const projects:project[]  = [
  {
    title: "Netflix-Clone VueJs",
    subtitle: "VueJs-Firebase",
    description:
      "This project is a responsive clone of Netflix, is connected with firebase for login and register, and shows trailers from youtube as an iframe",
    image: netflixCloneImg,
    link: "https://netflix-clone-3a020.web.app/",
  },
  {
    title: "Twitter-Clone React",
    subtitle: "React-Tailwind-Sanity",
    description:
      "This project is a responsive clone of twiter conect on the back with Sanity",
    image: "./project-2.gif",
    link: "https://reedbarger.com",
  },
];

export const contactOptions:contactOptions[] = [
  {
    description: "linkedin",
    image: linkedinImg,
    link: "https://www.linkedin.com/in/dianlobb",
  },
  {
    description: "twitter",
    image: twitterImg,
    link: "https://twitter.com/dianlobbTravel",
  },
  {
    description: "Git",
    image: gitImg,
    link: "https://github.com/dianlobb",
  },
  {
    description: "Whatsapp",
    image: whatsappImg,
    link: "https://api.whatsapp.com/send?phone=573058551887&text=%F0%9F%92%BC%20Hello%2C%20I%20saw%20your%20portfolio",
  },
  
];
