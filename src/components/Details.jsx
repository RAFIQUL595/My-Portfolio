import { useEffect, useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { FaGithub, FaStar } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
import { LuCodeXml } from "react-icons/lu";
import { MdChevronRight } from "react-icons/md";
import { TbPackages } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Details = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800, overflow: 'hidden' });
        AOS.refresh();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // Fetch the project data from the server using the id parameter from the URL
    useEffect(() => {
        fetch("/projects.json")
            .then(response => response.json())
            .then(data => {
                const foundProject = data.find(data => data.id === id);
                setProject(foundProject);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [id]);

    // Display the project details if available, or an error message if not found or failed to load
    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
                <FadeLoader color="purple" size={50} />
            </div>
        );
    }

    if (error) {
        return <div className="min-h-screen flex items-center justify-center text-base sm:text-lg text-white bg-gray-900">Error fetching project data.</div>;
    }

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center text-base sm:text-lg text-white bg-gray-900">Project not found.</div>;
    }

    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 bg-gray-900 overflow-hidden">
            <div className="flex items-center gap-2 flex-wrap">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex gap-2 items-center px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base"
                >
                    <GoArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                    Back
                </button>
                <p className="opacity-50 text-purple-200 flex items-center gap-2">Projects <MdChevronRight className="size-6" /></p>
                <h1 className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base opacity-80">{project.webName}</h1>
            </div>
            <div className="my-10 md:flex lg:gap-20">
                {/* Text */}
                <div className="md:w-3/6" data-aos="fade-right">
                    <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight md:w-4/6">{project.webName}</h1>
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-20 mt-4"></div>
                    <p className="my-8 opacity-90">{project.description}</p>
                    <div className="flex gap-5">
                        <div className="flex items-center gap-4 border w-fit p-1 md:pr-14 md:pl-5 py-2 rounded-lg border-blue-950 hover:border-blue-900 my-5 transform hover:scale-105 transition-all duration-300">
                            <p className="bg-blue-950 p-2 rounded-full"><LuCodeXml className="size-6" /></p>
                            <div>
                                <p className="text-lg md:text-xl font-semibold text-blue-200">{project.technologiesUsed.length}</p>
                                <p className="text-[10px] md:text-xs text-gray-400">Total Technologies</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border w-fit p-1 md:pr-14 md:pl-5 py-2 rounded-lg border-purple-950 hover:border-purple-900 my-5 transform hover:scale-105 transition-all duration-300">
                            <p className="bg-purple-950 p-2 rounded-full"><FiLayers className="size-6" /></p>
                            <div>
                                <p className="text-lg md:text-xl font-semibold text-blue-200">{project.keyFeatures.length}</p>
                                <p className="text-[10px] md:text-xs text-gray-400">Total Key Features</p>
                            </div>
                        </div>
                    </div>
                    {/* GitHub link & Live Link */}
                    <div className="flex gap-4">
                        {/* Live Link */}
                        <Link
                            to={project.liveLink}
                            className="group px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base flex gap-2 items-center"
                            target="_blank"
                        >
                            <CiShare1 className="size-6 transition-transform duration-300 group-hover:rotate-12" />
                            Live Demo
                        </Link>

                        {/* Git Hub Link */}
                        <Link to={project.githubLink} className="group flex gap-2 relative items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base" target="_blank">
                            <FaGithub className="size-6 transition-transform duration-300 group-hover:rotate-12" />GitHub
                        </Link>
                    </div>
                    {/* Technologies Used */}
                    <div className="my-8">
                        <h2 className="text-xl md:text-2xl font-semibold text-blue-200 mb-4 flex items-center gap-3"><LuCodeXml /> Technologies Used</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.technologiesUsed.map((tech) => (
                                <div
                                    key={tech.id}
                                    className="flex items-center gap-2  text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-950 hover:text-purple-200 transition-all group"
                                >
                                    <TbPackages className="transition-transform duration-300 group-hover:rotate-12" />{tech}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                {/* Image */}
                <div className="flex-1" data-aos="fade-left">
                    <div className="zoom-wrapper rounded-2xl">
                        <img
                            src={project.webImage}
                            alt={project.webName}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Key Features */}
                    <div className="backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-purple-800/50 transition-colors duration-300 group mt-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <FaStar className="text-yellow-400 lucide lucide-star w-5 h-5 group-hover:rotate-[20deg] transition-transform duration-300" /> Key Features
                        </h2>
                        <ul className="mt-4 space-y-3">
                            {project.keyFeatures.map((feature) => (
                                <li key={feature.id} className="flex gap-2 hover:bg-gradient-to-r form-black to-blue-950/60 rounded-2xl p-2">
                                    <span className="text-blue-400">•</span> {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;