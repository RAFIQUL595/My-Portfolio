import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaDownload, FaUser } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 800, overflow: 'hidden' });
        AOS.refresh();
    }, []);

    return (
       <div className="bg-gray-900">
         <section
            id="about"
            className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8  max-w-screen-lg mx-auto overflow-hidden"
            data-aos="fade-up"
        >
            <SectionTitle
                heading="About Me"
                subHeading="Transforming ideas into digital experiences"
            />

            <h1
                data-aos="fade-right"
                className="text-xl sm:text-2xl md:text-3xl text-center font-bold mt-4 sm:mt-6"
            >
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                    Md. Rafiqul Islam
                </span>
            </h1>

            <p
                data-aos="fade-left"
                className="text-base sm:text-lg text-center font-medium text-purple-300 mt-2 sm:mt-3"
            >
                MERN Stack Developer
            </p>

            <p
                data-aos="fade-up"
                className="mt-4 sm:mt-6 text-base sm:text-lg text-white leading-relaxed"
            >
                My journey in web development started with a deep curiosity about how computers function and how websites are built.
                Initially, I explored HTML and CSS to design static websites, but my passion for coding led me to JavaScript,
                where I honed my skills in frontend technologies and later transitioned into full-stack development with the MERN stack.
            </p>

            <p
                data-aos="fade-up"
                className="mt-4 sm:mt-6 text-base sm:text-lg text-white leading-relaxed"
            >
                Over the years, I have worked on real-world projects, enhancing my proficiency in frontend development, database management, and server-side programming.
                I am committed to continuous learning and staying updated with the latest trends in web technologies. My goal is to contribute to impactful projects
                and craft meaningful digital experiences.
            </p>

            <div
                data-aos="zoom-in"
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-5 sm:mt-8"
            >
                <Link
                    to="https://drive.google.com/file/d/1NgvgyK0wfY1MtZo290sngxoq6NljSQwg/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="cursor-pointer btn gap-2 group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg flex items-center w-full md:w-fit text-lg mb-3"
                        aria-label="Download Resume"
                    >
                        <FaDownload className="transition-transform duration-300 group-hover:translate-y-1 text-white" />
                        Get Resume
                    </button>
                </Link>

                <HashLink to="#contact">
                    <button
                        className="cursor-pointer btn gap-2 group bg-gradient-to-r from-purple-500/50 to-blue-500/50 text-white px-6 py-2 rounded-lg flex items-center w-48 text-lg mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500"
                        aria-label="Hire Me"
                    >
                        <FaUser className="size-4 sm:size-5" />
                        Hire Me
                    </button>
                </HashLink>
            </div>
        </section>
       </div>
    );
};

export default About;