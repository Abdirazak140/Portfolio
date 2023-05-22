import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

function Vanish({ children, className, duration }: any){
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView])

    return(
        <motion.div ref={ref}  className={className}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: duration }}
        >
            {children}
        </motion.div>
    )
}


export default Vanish