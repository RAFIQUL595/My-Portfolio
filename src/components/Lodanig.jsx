import { FaCode, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { PropagateLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="flex gap-5 text-4xl text-white mb-5">
                <FaCode />
                <FaReact />
                <RiTailwindCssFill />
                <IoLogoFirebase />
            </div>
            <div className="text-4xl text-center text-white font-bold">
                <p>Welcome To My</p>
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                    Portfolio Website
                </p>
            </div>
            <PropagateLoader className="mt-8" color="purple" size={15} />
        </div>
    );
};

export default Loading;