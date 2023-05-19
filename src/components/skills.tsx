import { IconContext } from "react-icons";

function Skill({ name, icon }: any) {
    return(
        <div className="flex flex-row items-center justify-center border border-golden p-3 rounded-md">
            <IconContext.Provider value={{ className: "text-golden", size: "30px" }}>
                {icon}
            </IconContext.Provider>
            <span className="ml-2 text-xl text-golden">{name}</span>
        </div>
    )
}

export default Skill;