import { useState } from "react";
import { IconContext } from "react-icons";
import { TbCircleLetterA } from "react-icons/tb";
import { Link } from 'react-scroll'

function Navbar(){
    const [navBg, setNavBg] = useState(false);

    function changeNavBackground(){
        if (window.scrollY > 70){
            setNavBg(true);
        }
        else{
            setNavBg(false);
        }
    }

    window.addEventListener("scroll", changeNavBackground);


    return(
        <nav className={`w-full h-20 z-50 flex flex-row justify-between pt-5 fixed transition ease-in-out duration-500 ${navBg ? "bg-ecru" : "bg-eggshell}"}`}>
            <div className="ml-20">
                <IconContext.Provider value={{ color: "437c90", size: "40px" }}>
                    <TbCircleLetterA/>
                </IconContext.Provider>
            </div>
            <div className="flex flex-row">
                <ul className="flex flex-row mt-3">
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className="mr-4 text-ceru font-medium cursor-pointer transition duration-100 hover:text-dsg">
                    About
                </Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="mr-4 text-ceru font-medium cursor-pointer  transition duration-100 hover:text-dsg">
                    Projects
                </Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="mr-4 text-ceru font-medium cursor-pointer transition duration-100 hover:text-dsg">
                    Contact
                </Link>
                </ul>
                <button className="mr-20 mt-1 curve-btn h-10 px-2.5">Resume</button>
            </div>
        </nav>
    )
}

export default Navbar