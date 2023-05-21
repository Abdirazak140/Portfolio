import { Element } from "react-scroll";
import me from "../assets/IMG-3345.jpg"
import { FaGitAlt, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import Skill from "../components/skills";
import { SiCss3, SiElectron, SiFirebase, SiGnubash, SiJavascript, SiMysql, SiTailwindcss, SiTypescript, SiC } from "react-icons/si";
import { TbLetterC } from "react-icons/tb";
import AnimateLeft from "../components/motion_left";
import AnimateRight from "../components/motion_right";
import { DiNodejs } from "react-icons/di";

function About(){
    return(
        <Element name="about" className="bg-eggshell w-full h-ha flex justify-center">
            <div className="z-10 relative mt-20">
                <h1 className="text-ceru font-bold text-4xl">About Me.</h1>
                <div className="flex flex-row mt-5 space space-x-10">
                    <div className="flex flex-col">
                        <p className="text-dsg">
                        I am currently part of the Robotics Team at York University,<br/>
                        where I am expanding my skills in React and learning ROS2.<br/> 
                        The most significant skill I've gained from this experience is<br/> 
                        teamwork. This has provided me with the opportunity to contribute<br/> 
                        to a project as a part of a team, a valuable experience that is<br/> 
                        unfamiliar to me.<br/>
                        </p>
                        <p className="text-dsg mt-4">
                        I'm seeking a co-op role where I can leverage my skills,<br/>
                        learn from experts, and contribute to a team.
                        </p>
                    </div>
                    <div className="relative image-container">
                        <img src={me} className="me-img" alt="Description"></img>
                        <div className="color-overlay"></div>
                    </div>
                </div>
                <div className="flex justify-center mt-20 flex-col">
                    <h1 className="text-ceru font-bold text-4xl mt-10 text-center">Technical Skills</h1>
                    <div>
                        <h2 className="text-dsg font-bold text-2xl mt-10 mb-3 text-center">Programming Languages:</h2>
                        <AnimateLeft className="flex flex-wrap justify-center items-center space-x-2">
                            <Skill name="Python" icon={<FaPython/>}/>
                            <Skill name="Java" icon={<FaJava/>}/>
                            <Skill name="C" icon={<SiC/>}/>
                            <Skill name="JavaScript" icon={<SiJavascript/>}/>
                            <Skill name="TypeScript" icon={<SiTypescript/>}/>
                            <Skill name="HTML" icon={<FaHtml5/>}/>
                            <Skill name="CSS" icon={<SiCss3/>}/>
                            <Skill name="BASH" icon={<SiGnubash/>}/>
                        </AnimateLeft>
                        <h2 className="text-dsg font-bold text-2xl mt-6 text-center mb-3">Frameworks & Libraries:</h2>
                        <AnimateRight className="flex flex-wrap justify-center items-center space-x-2">
                            <Skill name="Tailwind " icon={<SiTailwindcss/>}/>
                            <Skill name="React" icon={<FaReact/>}/>
                            <Skill name="Electron" icon={<SiElectron/>}/>
                            <Skill name="Node.js" icon={<DiNodejs/>}/>
                        </AnimateRight>
                        <h2 className="text-dsg font-bold text-2xl mt-6 text-center mb-3">Tools:</h2>
                        <AnimateLeft className="flex flex-wrap justify-center items-center space-x-2">
                            <Skill name="Git " icon={<FaGitAlt/>}/>
                            <Skill name="Firebase" icon={<SiFirebase/>}/>
                            <Skill name="MySql Workbench" icon={<SiMysql/>}/>
                        </AnimateLeft>
                    </div>
                </div>  
            </div>
        </Element>
    )
}

export default About;