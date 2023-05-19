import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function Pop({ className, children, duration }: any) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
    })

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView])

    return (
        <motion.div ref={ref} className={className}
            animate={{ x: 200}}
            transition={{ type: "spring", stiffness: 200, duration: {duration} }}
            >
            {children}
        </motion.div>
    )
}

export default Pop;