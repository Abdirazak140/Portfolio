import Vanish from "../components/vanish";

function Home(){
    return(
        <div className="bg-eggshell w-full h-hs flex flex-col justify-center">
            <div className="ml-7 sm:ml-24 z-10 relative">
                <div>
                    <Vanish duration={1} className="text-golden font-medium text-lg mb-5 sm:text-2xl">Hi, my name is</Vanish>
                    <Vanish duration={1.5} className="text-ceru font-bold text-4xl mb-5 sm:text-7xl">Abdirazak Yusuf.</Vanish>
                    <Vanish duration={2} className="text-dsg font-medium text-2xl sm:text-4xl">I'm a second year Software Engineering student<br/>studying at York University.</Vanish>
                </div>
            </div>
        </div>
    )
}

export default Home;