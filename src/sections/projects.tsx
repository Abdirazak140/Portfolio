import { Element } from "react-scroll";
import Project from "../components/project";
import bruh from "../assets/placeholder.webp"

function Projects(){
    return(
        <Element name="projects" className="bg-eggshell w-full h-hp flex justify-center">
            <div className="z-10 relative mt-11">
                <h1 className="text-ceru font-bold text-4xl text-center">Featured Projects.</h1>
                <div className="flex flex-wrap mt-4 space space-x-10 justify-center">
                    <Project 
                    imgSrc={bruh} 
                    projectName="SportsBracketHub"
                    toolsUsed="React, Typescript, Tailwind, Firebase"
                    description="A web application for making predictions 
                    on NBA sports brackets. The app provides live match outcomes, 
                    prediction verifications, and user authentication for saving 
                    predictions and tracking progress over time."
                    githubLink="https://github.com/Abdirazak140/SportsBracketHub"
                    />
                    <Project 
                    imgSrc={bruh} 
                    projectName="PriveCall"
                    toolsUsed="Embedded JavaScript, CSS, HTML"
                    description="An anonymous, secure, easy to use, video 
                    calling platform that requires no sign-ups and provides 
                    immediate connections for its users."
                    githubLink="https://github.com/KaranpreetRaja/PriveCall"
                    />
                    <Project 
                    imgSrc={bruh} 
                    projectName="Syntax Sage"
                    toolsUsed="Java Swing, JUnit, MySQL Workbench"
                    description="Is a program that aims to help users 
                    learn and master programming language syntax."
                    githubLink="https://github.com/KaranpreetRaja/SyntaxSage"
                    />
                    <Project 
                    imgSrc={bruh} 
                    projectName="Plant Watering System"
                    toolsUsed="Java, Firmata, JUnit"
                    description="An automated plant watering system utilizing Java and an Arduino."
                    />
                    <Project 
                    imgSrc={bruh} 
                    projectName="Door Alarm"
                    toolsUsed="Java, Firmata, JUnit"
                    description="Door Alarm - Java, Firmata, JUnit
                    An door alarm system developed using Arduino and an ultrasonic sensor. 
                    The alarm triggers when a door is opened at configured times."
                    />
                </div>
            </div>
        </Element>
    )
}

export default Projects;