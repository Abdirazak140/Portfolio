import { Tilt } from 'react-tilt'

function Slant({ children, className}: any){
    const defaultOptions = {
        reverse:        false,
        max:            25,     
        perspective:    1000,  
        scale:          1.1,    
        speed:          1000,   
        transition:     true,
        axis:           null, 
        reset:          true,  
        easing:         "cubic-bezier(.03,.98,.52,.99)", 
    }

    return(
        <Tilt options={defaultOptions} className={className}>
            {children}
        </Tilt>
    )
}

export default Slant