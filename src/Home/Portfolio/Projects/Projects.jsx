import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [showAll, setShowAll] = useState(false);

    // Fetch the projects data from the server
    useEffect(() => {
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    // Limit the number of visible projects
    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    return (
        <div className="grid flex-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleProjects.map((project) => (
                <Card key={project.id} project={project} ></Card>
            ))}

            {projects.length > 6 && (
                <button
                    className="btn border border-blue-950 bg-blue-950/50 px-2 rounded-lg relative pb-1 w-fit col-span-full 
                    after:content-[''] after:absolute after:h-[2px] after:w-0 
                    after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 
                    after:left-0 after:bottom-0 after:transition-all after:duration-300 
                    hover:after:w-full"
                    onClick={() => setShowAll(!showAll)}
                >
                    <div className="flex items-center group gap-2">
                        {showAll ? <>See Less <IoIosArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" /></> : <>See More <IoIosArrowDown className="transition-transform duration-300 group-hover:translate-y-1" /></>}
                    </div>
                </button>

            )}
        </div>
    );
};

export default Projects;