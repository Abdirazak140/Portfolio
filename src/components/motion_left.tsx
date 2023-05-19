import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function AnimateLeft({ className, children }: any) {
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
            initial='hidden'
            animate={controls}
            variants={{
                hidden: { x: -1000 },
                visible: { x: 0, transition: { duration: 1} }
            }}
        >
            {children}
        </motion.div>
    )
}

export default AnimateLeft;
