import { Tilt } from 'react-tilt'

function Slant({ children, className}: any){
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            30,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
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