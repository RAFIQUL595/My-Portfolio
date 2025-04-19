import { IoCodeSlash } from "react-icons/io5";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PiCertificateLight } from "react-icons/pi";
import { TbBrandAsana } from "react-icons/tb";
import SectionTitle from "../../components/SectionTitle";
import Projects from "./Projects/Projects";
import Certificates from "./Certificates/Certificates";
import Skill from "./Skill/Skill";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = () => {
    useEffect(() => {
        AOS.init({ duration: 800, overflow: 'hidden' });
        AOS.refresh();
    }, []);
    
    return (
        // Projects Section
        <div id="projects" className="min-h-[650px] pt-20 md:pt-28" >
            <div data-aos="fade-up">
                <SectionTitle heading="Project Showcase" subHeading="Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path."></SectionTitle>
            </div>
            <Tabs className="mt-10 md:mt-14">
                <TabList className="flex justify-between gap-2 rounded-2xl text-sm md:text-xl mb-5">
                    <Tab
                        className="flex flex-col items-center md:w-full px-4 py-2 cursor-pointer text-gray-500 transition-all duration-300 
                        hover:text-white hover:bg-blue-950 rounded-xl"
                        selectedClassName="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    >
                        <IoCodeSlash className="size-6" />
                        <span>Projects</span>
                    </Tab>
                    <Tab
                        className="flex flex-col items-center md:w-full px-4 py-2 cursor-pointer text-gray-500 transition-all duration-300 
                        hover:text-white hover:bg-blue-950 rounded-xl"
                        selectedClassName="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    >
                        <PiCertificateLight className="size-6" />
                        <span>Certificates</span>
                    </Tab>
                    <Tab
                        className="flex flex-col items-center md:w-full px-4 py-2 cursor-pointer text-gray-500 transition-all duration-300 
                        hover:text-white hover:bg-blue-950 rounded-xl"
                        selectedClassName="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    >
                        <TbBrandAsana className="size-6" />
                        <span>Skill</span>
                    </Tab>
                </TabList>
                <TabPanel>
                    <Projects />
                </TabPanel>
                <TabPanel>
                    <Certificates />
                </TabPanel>
                <TabPanel>
                    <Skill />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Portfolio;