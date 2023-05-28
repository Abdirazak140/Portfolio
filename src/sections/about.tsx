import { Element } from "react-scroll";
import me from "../assets/IMG-3345.jpg"
import { FaGitAlt, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import Skill from "../components/skills";
import { SiCss3, SiElectron, SiFirebase, SiGnubash, SiJavascript, SiMysql, SiTailwindcss, SiTypescript, SiC } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import Vanish from "../components/vanish";

function About(){
    return(
        <Element name="about" className="bg-eggshell w-full flex justify-center">
            <div className="z-10 relative mt-20">
                <h1 className="text-ceru font-bold text-4xl text-center">About Me.</h1>
                <Vanish duration={1} className="flex flex-col sm:flex-row items-start justify-center mt-5 space-y-4 sm:space-y-0 sm:space-x-10">
                    <div className="flex flex-col mb-3 text-center sm:text-left w-96">
                        <p className="text-dsg text-sm sm:text-base">
                            I am currently part of the Robotics Team at York University, where I am expanding my skills in React and learning ROS2. The most significant skill I've gained from this experience is teamwork. This has provided me with the opportunity to contribute to a project as a part of a team, a valuable experience that is unfamiliar to me.
                        </p>
                        <p className="text-dsg mt-4 text-sm sm:text-base">
                            I'm seeking a co-op role where I can leverage my skills, learn from experts, and contribute to a team.
                        </p>
                    </div>
                    <div className="relative image-container ml-10">
                        <img src={me} className="me-img" alt="Description"></img>
                        <div className="color-overlay"></div>
                    </div>
                </Vanish>
                <div className="flex justify-center mt-20 flex-col">
                    <h1 className="text-ceru font-bold text-4xl mt-10 text-center">Technical Skills</h1>
                    <div>
                        <h2 className="text-dsg font-bold text-2xl mt-10 mb-3 text-center">Programming Languages:</h2>
                        <div className="flex flex-wrap justify-center items-center space-x-2">
                            <Vanish duration={.5}><Skill name="Python" icon={<FaPython/>}/></Vanish>
                            <Vanish duration={1}><Skill name="Java" icon={<FaJava/>}/></Vanish>
                            <Vanish duration={1.5}><Skill name="C" icon={<SiC/>}/></Vanish>
                            <Vanish duration={1.5}><Skill name="JavaScript" icon={<SiJavascript/>}/></Vanish>
                            <Vanish duration={1.5}><Skill name="TypeScript" icon={<SiTypescript/>}/></Vanish>
                            <Vanish duration={1.5}><Skill name="HTML" icon={<FaHtml5/>}/></Vanish>
                            <Vanish duration={1.5}><Skill name="CSS" icon={<SiCss3/>}/></Vanish>
                            <Vanish duration={1.5}><Skill name="BASH" icon={<SiGnubash/>}/></Vanish>
                        </div>
                        <h2 className="text-dsg font-bold text-2xl mt-6 text-center mb-3">Frameworks & Libraries:</h2>
                        <div className="flex flex-wrap justify-center items-center space-x-2">
                            <Vanish duration={.5}><Skill name="Tailwind " icon={<SiTailwindcss/>}/></Vanish>
                            <Vanish duration={1}><Skill name="React" icon={<FaReact/>}/></Vanish>
                            <Vanish duration={1.5}><Skill name="Electron" icon={<SiElectron/>}/></Vanish>
                            <Vanish duration={1.5}><Skill name="Node.js" icon={<DiNodejs/>}/></Vanish>
                        </div>
                        <h2 className="text-dsg font-bold text-2xl mt-6 text-center mb-3">Tools:</h2>
                        <div className="flex flex-wrap justify-center items-center space-x-2">
                            <Vanish duration={.5}><Skill name="Git " icon={<FaGitAlt/>}/></Vanish>
                            <Vanish duration={1}><Skill name="Firebase" icon={<SiFirebase/>}/></Vanish>
                            <Vanish duration={1.5}><Skill name="MySql Workbench" icon={<SiMysql/>}/></Vanish>
                        </div>
                    </div>
                </div>  
            </div>
        </Element>
    )
}

export default About;