import { IconContext } from "react-icons";
import { BsCodeSlash, BsLink } from "react-icons/bs";

function Project({ imgSrc, projectName, toolsUsed, description, githubLink, demoLink}: any){
  return (
    <div className="flex flex-col p-4 bg-white shadow-lg w-96 m-4">
        <div className="flex justify-center">
                <img
                src={imgSrc}
                alt={projectName}
                className="w-80 h-64 object-cover"
                />
        </div>
        <div className="mt-4 flex flex-col justify-between">
            <h5 className="font-semibold text-lg text-dsg">
                {projectName} 
                <span className="text-sm pl-2 text-golden">
                    {toolsUsed}
                </span>
            </h5>
            <p className="mt-2 text-dsg font-normal">
                {description}
            </p>
            <div className="mt-4 flex flex-row">
                {githubLink && 
                <a href={githubLink} target="_blank" rel="noreferrer" className="py-2 px-4 bg-dsg text-golden rounded-md hover:bg-ddsg mr-2 flex flex-row justify-center items-center w-30">
                    <span className="mr-2">Code</span> 
                    <IconContext.Provider value={{size: "30px" }}>
                        <BsCodeSlash/>
                    </IconContext.Provider>
                </a>}
                {demoLink && 
                <a href={demoLink} target="_blank" rel="noreferrer" className="py-2 px-4 bg-dsg text-golden rounded-md hover:bg-ddsg flex flex-row justify-center items-center w-30">
                    <span className="mr-2">Demo</span> 
                    <IconContext.Provider value={{size: "30px" }}>
                        <BsLink/>
                    </IconContext.Provider>
                </a>}
            </div>
        </div>
    </div>
  )
}


export default Project;
