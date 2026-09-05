import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-primaryBg"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex flex-col items-center"
                    >
                        {/* Logo Text */}
                        <div className="relative text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primaryAccent via-secondaryAccent to-highlightAccent animate-gradient-x mb-4">
                            Zain Tahir
                        </div>
                        {/* Animated Line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-1 bg-gradient-to-r from-primaryAccent to-highlightAccent rounded-full"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
