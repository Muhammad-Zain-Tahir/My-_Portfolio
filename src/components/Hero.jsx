import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiJavascript } from 'react-icons/si';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-premium pt-20">

            {/* Floating Particles/Icons */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
                <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-[20%] left-[10%] text-5xl text-cyan-500">
                    <FaReact />
                </motion.div>
                <motion.div animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-[30%] right-[15%] text-6xl text-yellow-400">
                    <SiJavascript />
                </motion.div>
                <motion.div animate={{ y: [0, -40, 0], rotate: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[20%] left-[15%] text-5xl text-green-500">
                    <FaNodeJs />
                </motion.div>
                <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[30%] right-[10%] text-6xl text-green-600">
                    <SiMongodb />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <div className="flex-1 text-left flex flex-col items-start gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ color: 'var(--text-primary)' }} className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tight">
                            Hi, I'm <br />
                            <span className="text-gradient">Zain Tahir</span>
                        </h1>
                        <div className="h-[40px] md:h-[50px] mb-6">
                            <TypeAnimation
                                sequence={[
                                    'MERN Stack Developer',
                                    2000,
                                    'Full Stack Developer',
                                    2000,
                                    'React Developer',
                                    2000,
                                    'Node.js Developer',
                                    2000,
                                ]}
                                wrapper="h3"
                                cursor={true}
                                repeat={Infinity}
                                className="text-2xl md:text-3xl font-semibold"
                                style={{ color: '#06b6d4' }}
                            />
                        </div>

                        <p style={{ color: 'var(--text-secondary)' }} className="text-lg max-w-xl mb-8 leading-relaxed">
                            I build modern, scalable, responsive, and high-performance web applications using the MERN Stack.
                            Let's turn your ideas into outstanding digital experiences.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="px-8 py-3 rounded-full bg-primaryAccent text-white font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30"
                            >
                                View My Work
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="px-8 py-3 rounded-full bg-transparent border-2 border-primaryAccent text-white font-semibold hover:bg-white/5 transition-colors"
                            >
                                Contact Me
                            </motion.a>
                        </div>

                        <div className="flex items-center gap-6">
                            <span className="text-gray-400 font-medium">Follow me:</span>
                            <div className="flex gap-4">
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
                                    <FaGithub />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-2xl text-gray-400 hover:text-blue-500 transition-colors">
                                    <FaLinkedin />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-2xl text-gray-400 hover:text-blue-400 transition-colors">
                                    <FaFacebook />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-2xl text-gray-400 hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content / Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="flex-1 flex justify-center relative mt-10 md:mt-0"
                >
                    <div className="relative w-[320px] h-[320px] md:w-[440px] md:h-[440px] group flex items-center justify-center">

                        {/* Ambient glow cloud */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primaryAccent via-secondaryAccent to-highlightAccent blur-[90px] opacity-20 group-hover:opacity-35 transition-opacity duration-700 animate-pulse" />

                        {/* Outer dashed decorative spinning ring */}
                        <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primaryAccent/30 animate-spin-slow" />

                        {/* Conic gradient glow ring */}
                        <div
                            className="absolute -inset-1 rounded-full animate-spin-slow"
                            style={{
                                background: 'conic-gradient(from 0deg, transparent 25%, #3b82f6 50%, #8b5cf6 70%, transparent 95%)',
                                animationDirection: 'reverse',
                                animationDuration: '5s',
                                padding: '2px',
                                borderRadius: '9999px',
                            }}
                        />

                        {/* Main portrait container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden z-10 shadow-[0_0_60px_rgba(59,130,246,0.35),0_0_120px_rgba(139,92,246,0.15)]">
                            {/* Studio colour grade overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-transparent to-purple-900/25 z-20 pointer-events-none mix-blend-overlay" />
                            {/* Inner vignette for depth */}
                            <div className="absolute inset-0 rounded-full z-30 pointer-events-none" style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.55)' }} />
                            {/* Subtle scanline texture */}
                            <div
                                className="absolute inset-0 z-40 pointer-events-none opacity-[0.035]"
                                style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.9) 3px, rgba(255,255,255,0.9) 4px)' }}
                            />
                            {/* Hover shimmer */}
                            <div className="absolute inset-0 z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-transparent via-white/5 to-transparent" />

                            {/* The actual photo */}
                            <img
                                src="/profile.jpg"
                                alt="Zain Tahir – MERN Stack Developer"
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                                style={{ filter: 'contrast(1.08) saturate(1.15) brightness(1.02)' }}
                            />
                        </div>

                        {/* Floating Badge – React */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ background: 'var(--overlay-badge)', border: '1px solid var(--border-stronger)', backdropFilter: 'blur(12px)' }}
                            className="absolute top-10 -right-5 md:-right-14 py-2 px-4 rounded-xl flex items-center gap-2 shadow-xl z-20"
                        >
                            <div className="w-7 h-7 rounded-full bg-primaryAccent/20 flex items-center justify-center">
                                <FaReact className="text-cyan-400 text-base animate-spin-slow" />
                            </div>
                            <span style={{ color: 'var(--text-primary)' }} className="text-xs font-semibold whitespace-nowrap">React Developer</span>
                        </motion.div>

                        {/* Floating Badge – Node.js */}
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            style={{ background: 'var(--overlay-badge)', border: '1px solid var(--border-stronger)', backdropFilter: 'blur(12px)' }}
                            className="absolute bottom-10 -left-5 md:-left-14 py-2 px-4 rounded-xl flex items-center gap-2 shadow-xl z-20"
                        >
                            <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">
                                <FaNodeJs className="text-green-400 text-base" />
                            </div>
                            <span style={{ color: 'var(--text-primary)' }} className="text-xs font-semibold whitespace-nowrap">MERN Expert</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

