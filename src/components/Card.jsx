import PropTypes from "prop-types";
import { CiShare1 } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import "../components/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ project }) => {
    const { webImage, webName, liveLink, id } = project;

     useEffect(() => {
            AOS.init({ duration: 800 });
        }, []);

    return (
        <div data-aos="zoom-in-left" className="flex">
            <div className="card p-3 mx-auto flex flex-col bg-base-100 zoom-wrapper shadow-sm hover:outline hover:outline-purple-500">

                {/* Project Image */}
                <figure className="w-full h-48">
                    <img src={webImage} alt={webName} className="w-full h-full object-cover rounded-md" />
                </figure>

                {/* Project Description */}
                <div className="card-body flex flex-grow flex-col bg-blue-950/50 rounded-lg p-4">
                    <h2 className="card-title text-lg font-semibold text-white">{webName}</h2>
                    {/* Buttons Section */}
                    <div className="card-actions flex justify-between items-center mt-auto">
                        {/* External Link - Live Demo */}
                        <Link to={liveLink} target="_blank">
                            <button className="cursor-pointer flex items-center gap-2 text-purple-400 hover:text-purple-500 transition">
                                Live Demo <CiShare1 className="size-4" />
                            </button>
                        </Link>

                        {/* Internal Navigation */}
                        <Link to={id ? `/details/${id}` : "#"}>
                            <button className="btn bg-gradient-to-r from-purple-500 to-blue-500 flex items-center group gap-2 text-white">
                                Details <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// **Prop Types Validation**
Card.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        webImage: PropTypes.string,
        webName: PropTypes.string,
        description: PropTypes.string,
        keyFeatures: PropTypes.arrayOf(PropTypes.string),
        technologiesUsed: PropTypes.arrayOf(PropTypes.string),
        liveLink: PropTypes.string,
    }).isRequired,
};

export default Card;