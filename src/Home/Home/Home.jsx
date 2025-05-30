/* eslint-disable react/no-unescaped-entities */
import { CiLinkedin, CiShare1 } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import profileImg from '../../../public/Rafiqul.jpg';
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuMailOpen } from "react-icons/lu";
import { NavHashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="bg-gray-900">
      <div
      id="home"
      className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8  max-w-screen-lg mx-auto overflow-hidden"
    >
      <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8">
        {/* Image */}
        <img
          src={profileImg}
          alt="Rafiqul Islam"
          className="w-80 h-80 md:w-[500px] rounded-full shadow-2xl border-4 border-gray-600 bg-purple-800 mb-5 transform hover:rotate-4 hover:scale-105 transition-all duration-300"
        />
        {/* Text */}
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Hello, I'm
            </span>
            <br />
            Rafiqul Islam
          </h1>
          <p className="py-4 sm:py-6 text-white text-base sm:text-lg text-center md:text-left">
            MERN Stack Developer
          </p>
          <p className="text-white text-sm sm:text-base md:text-lg w-full sm:w-80 md:w-96 mb-4 text-center md:text-left">
            <Typewriter
              words={[
                'I make beautiful websites',
                'I develop user-friendly apps',
                'I create seamless experiences',
                'I build scalable web solutions',
              ]}
              loop={true}
              cursor
              cursorColor="blue"
            />
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 my-4 sm:my-5 justify-center md:justify-start">
            <p className="px-2 sm:px-3 py-1 rounded-2xl shadow-purple-500 backdrop-blur-lg shadow-md hover:bg-blue-950 opacity-90 text-xs sm:text-sm">
              React
            </p>
            <p className="px-2 sm:px-3 py-1 rounded-2xl shadow-purple-500 backdrop-blur-lg shadow-md hover:bg-blue-950 opacity-90 text-xs sm:text-sm">
              Tailwind
            </p>
            <p className="px-2 sm:px-3 py-1 rounded-2xl shadow-purple-500 backdrop-blur-lg shadow-md hover:bg-blue-950 opacity-90 text-xs sm:text-sm">
              Firebase
            </p>
            <p className="px-2 sm:px-3 py-1 rounded-2xl shadow-purple-500 backdrop-blur-lg shadow-md hover:bg-blue-950 opacity-90 text-xs sm:text-sm">
              MongoDB
            </p>
            <p className="px-2 sm:px-3 py-1 rounded-2xl shadow-purple-500 backdrop-blur-lg shadow-md hover:bg-blue-950 opacity-90 text-xs sm:text-sm">
              Express.js
            </p>
            <p className="px-2 sm:px-3 py-1 rounded-2xl shadow-purple-500 backdrop-blur-lg shadow-md hover:bg-blue-950 opacity-90 text-xs sm:text-sm">
              Node.js
            </p>
            <p className="px-2 sm:px-3 py-1 rounded-2xl shadow-purple-500 backdrop-blur-lg shadow-md hover:bg-blue-950 opacity-90 text-xs sm:text-sm">
              Next.js
            </p>
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center md:justify-start">
            <Link
              to="https://drive.google.com/file/d/1qihhwkP63EM0jYmKMns_iBKEtyYqsB0m/view?usp=drive_link"
              target="_blank"
            >
              <button
                className="cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg w-full sm:w-fit text-sm sm:text-base font-semibold transition hover:opacity-80"
                aria-label="Download Resume"
              >
                Resume
                <CiShare1 className="transition-transform duration-300 hover:rotate-45 text-white size-4 sm:size-5" />
              </button>
            </Link>
            <NavHashLink to="#contact">
              <button
                className="cursor-pointer flex items-center justify-center gap-2 border border-purple-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg w-full sm:w-fit text-sm sm:text-base font-semibold transition"
                aria-label="Contact"
              >
                Contact
                <IoMailOutline className="hover:hidden size-4 sm:size-5" />
                <LuMailOpen className="hidden hover:inline size-4 sm:size-5" />
              </button>
            </NavHashLink>
          </div>
          <div className="flex gap-4 sm:gap-5 mt-4 sm:mt-5 justify-center md:justify-start">
            <Link to="https://github.com/RAFIQUL595" target="_blank">
              <FaGithub className="size-8 sm:size-10 px-1 sm:px-2 rounded-2xl shadow-purple-500 backdrop-blur-lg shadow-md hover:bg-blue-950 opacity-90" />
            </Link>
            <Link to="https://www.linkedin.com/in/rafiqul-islam-16367b196/" target="_blank">
              <CiLinkedin className="size-8 sm:size-10 px-1 sm:px-2 rounded-2xl shadow-purple-500 backdrop-blur-lg shadow-md hover:bg-blue-950 opacity-90" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;