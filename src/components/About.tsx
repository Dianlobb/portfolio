import { ArrowCircleDownIcon } from "@heroicons/react/solid";
import ProfileImg from "../img/Photo.jpg";
import curriculumVitae from '../static/DianaLoboaCV.pdf';


export default function About() {
  const onButtonClick = () => {
    const pdfUrl = curriculumVitae;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "DianaLoboaCV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <section id="about" className="flex flex-col">
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center py-32">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="flex  title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi <span className="animate-waving-hand">👋🏻</span>, I'm Diana.
          </h1>
          <br className="hidden lg:inline-block" />
          <h3 className="title-font sm:text-2xl text-2xl mb-3 font-medium text-white">
            I’m a full-stack Developer.
          </h3>
          <p className="mb-8 leading-relaxed font-semibold">
            Developer and student, at the moment I work as a full-stack
            developer with more than two years of experience developing dynamic
            WebApps and corporate platforms. I'm passionate about learning and
            sharing new things related to programming and new technologies with
            the aim of creating new tools that improve and optimize processes.
            <br />
            <br />
            With a big desire to continue learning.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-700 rounded text-lg"
            >
              See My latest Work
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Contact Me
            </a>
            <a
              onClick={onButtonClick}
              className="ml-4 inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-700 hover:text-white rounded text-lg"
              download
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded-full border-solid border-2 border-indigo-300 shadow-2xl"
            alt="ProfileImg"
            src={ProfileImg}
            width="480"
            height="480"
          />
        </div>
      </div>
      <a href="#skills" className="w-10 animate-bounce mb-4 self-center mb-10">
        <ArrowCircleDownIcon />
      </a>
    </section>
  );
}
