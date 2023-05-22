import { Element } from "react-scroll";
import { FiGithub, FiLinkedin, FiInstagram} from "react-icons/fi";
import { IconContext } from "react-icons";
import Vanish from "../components/vanish";

function Contact(){
    return(
        <Element name="contact" className="bg-eggshell w-full h-hc pt-8 flex flex-col items-center">
            <Vanish duration={.5} className="z-10 relative">
                <h1 className="text-ceru font-bold text-4xl top-4 text-center">Contact.</h1>
                <h2 className="text-center text-dsg font-medium text-2xl mt-8">Please remember that you're always welcome to contact me!</h2>
                <div className="flex justify-center mt-5">
                    <button className="curve-btn text-center h-14 px-8" onClick={() => window.location.href = "mailto:abdirazak140@gmail.com"}>Email</button>
                </div>
                <div className="flex justify-center text-5xl space-x-6 mt-10">
                <IconContext.Provider value={{ className: "contactIcon" }}>
                    <a href="https://github.com/Abdirazak140" target="_blank" rel="noopener noreferrer">
                        <FiGithub className="cursor-pointer"/>
                    </a>
                    <a href="https://www.linkedin.com/in/abdirazak-yusuf-a72163230/" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin className="cursor-pointer"/>
                    </a>
                    <a href="https://instagram.com/yabdirazak" target="_blank" rel="noopener noreferrer">
                        <FiInstagram className="cursor-pointer"/>
                    </a>
                </IconContext.Provider>
                </div>
            </Vanish>
        </Element>  

    )
}

export default Contact;