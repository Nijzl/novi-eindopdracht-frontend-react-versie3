import { AnimatePresence, motion } from "framer-motion";

function FadeWrapper({ children }) {
    return <AnimatePresence exitBeforeEnter={ true }>{ children }</AnimatePresence>;
}

function FadeTransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 75, transition: { ease: "easeOut" } }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -75, transition: { ease: "easeIn" } }}
            transition={{ duration: 0.5 }}
        >
            { children }
        </motion.div>
    );
}

export { FadeWrapper, FadeTransition };