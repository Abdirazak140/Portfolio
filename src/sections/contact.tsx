import { Element } from "react-scroll";

function Contact(){
    return(
        <Element name="contact" className="bg-eggshell w-full h-hc pt-8 flex flex-col items-center">
            <h1 className="text-ceru font-bold text-4xl top-4">Contact.</h1>
            <button className="mr-20 mt-1 curve-btn">Email</button>
        </Element>
    )
}

export default Contact;