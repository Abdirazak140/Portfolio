import { useEffect, useState } from "react";

function Home(){
    const [subHeading, setSubHeading] = useState("I'm Student.");
    
    useEffect(() => {
        
    },[subHeading])
    

    return(
        <div className="bg-eggshell w-full h-hs flex flex-col justify-center">
            <div className="ml-24 z-10 relative">
                <h2 className="text-golden font-medium text-2xl mb-5">Hi, my name is</h2>
                <h1 className="text-ceru font-bold text-7xl mb-5">Abdirazak Yusuf.</h1>
                <h3 className="text-dsg font-medium text-4xl">{subHeading}</h3>
            </div>
        </div>
    )
}

export default Home;