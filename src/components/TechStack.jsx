import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiGit } from 'react-icons/si';

const techs = [
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
    { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
    { name: 'GitHub', icon: FaGithub, color: 'text-white' },
];

const TechStack = () => {
    return (
        <section className="py-16 bg-[#0a0f1d] border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-500 uppercase tracking-widest">
                    Powered By
                </h2>
            </div>

            <div className="relative w-full overflow-hidden flex">
                {/* Left Fade */}
                <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-[#0a0f1d] to-transparent z-10"></div>

                {/* Marquee Track */}
                <motion.div
                    className="flex gap-10 md:gap-20 w-[200%] sm:w-[150%] md:w-[150%]"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 15, repeat: Infinity }}
                >
                    {/* Double array to create seamless loop */}
                    {[...techs, ...techs].map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <div key={index} className="flex flex-col items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap min-w-[80px]">
                                <Icon className={`text-5xl md:text-6xl ${tech.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`} />
                                <span className="text-gray-400 font-mono text-sm uppercase">{tech.name}</span>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Right Fade */}
                <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-[#0a0f1d] to-transparent z-10"></div>
            </div>
        </section>
    );
};

export default TechStack;
