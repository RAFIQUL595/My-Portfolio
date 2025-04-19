import img1 from '../../../assets/image/html.png';
import img2 from '../../../assets/image/css.png';
import img3 from '../../../assets/image/js.png';
import img4 from '../../../assets/image/taiwindcss.png';
import img5 from '../../../assets/image/react.png';
import img6 from '../../../assets/image/firebase.png';
import img7 from '../../../assets/image/node.js.png';
import img8 from '../../../assets/image/expressJS.png';
import img9 from '../../../assets/image/mongodb.png';
import img10 from '../../../assets/image/nextjs.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const skills = [
    { img: img1, text: "HTML" },
    { img: img2, text: "CSS" },
    { img: img3, text: "JavaScript" },
    { img: img4, text: "Tailwind CSS" },
    { img: img5, text: "ReactJS" },
    { img: img6, text: "Firebase" },
    { img: img7, text: "Node JS" },
    { img: img8, text: "Express JS" },
    { img: img9, text: "MongoDB" },
    { img: img10, text: "NextJS" }
];

const Skill = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-10" data-aos="zoom-out">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 bg-blue-950/25 hover:bg-blue-950 py-5 rounded-2xl "
                >
                    <img
                        className="h-16 w-16 md:h-20 md:w-20"
                        src={skill.img}
                        alt={skill.text}
                        aria-label={skill.text}
                    />
                    <p className="text-white/50 mt-2 text-sm md:text-base">
                        {skill.text}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Skill;