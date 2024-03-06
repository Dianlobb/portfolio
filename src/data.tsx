import netflixCloneImg from "./img/Netflix-clone.gif"
import twitterCloneImg from "./img/twitter-clone.gif"
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
  gitlink:string;
}

export interface contactOptions {
  description: string;
  image: string;
  link: string;

}

export const skills= [
  "VueJs",
  "Laravel",
  "NodeJs",
  "Django",
  "ReactJS",
  "SQL",
  "Python",
  "php",
  "JavaScript (ES6+)",
  "TypeScript",
  "Terraform",
  "AWS",
];

export const projects:project[]  = [
  {
    title: "Netflix-Clone VueJs",
    subtitle: "VueJs-Firebase",
    description:
      "Responsive clone of Netflix, is connected with firebase for login. To loging use user: test@test.com and  Pass: Test1234     ",
    image: netflixCloneImg,
    link: "https://vue-side-project-dianlobb.web.app",
    gitlink: "https://github.com/Dianlobb/netflixClone-vue",
  },
  {
    title: "Twitter-Clone React",
    subtitle: "React-Tailwind-Sanity",
    description:
    "Twitter-clone created with NextJS, connected with next-auth for login, allows creating tweets and comments with link images saved on sanity.",
    image: twitterCloneImg,
    link: "https://twitter-clone-dianlobb.vercel.app",
    gitlink: "https://github.com/Dianlobb/TwitterClone",
  },
];

export const contactOptions:contactOptions[] = [
  {
    description: "linkedin",
    image: linkedinImg,
    link: "https://www.linkedin.com/in/dianlobb",
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
