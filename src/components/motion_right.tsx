import { motion } from "framer-motion";

function AnimateRight({ className, children }: any){
    return (
        <motion.div className={className}
            initial={{ x: 1000}}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    )
}

export default AnimateRight