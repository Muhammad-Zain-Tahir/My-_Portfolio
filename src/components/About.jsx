import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StatCard = ({ title, value, suffix = "+" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(value);
            if (start === end) return;

            const totalDuration = 2000;
            const incrementTime = Math.abs(Math.floor(totalDuration / end));

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);
        }
    }, [isInView, value]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            ref={ref}
            className="glass p-6 rounded-xl flex flex-col items-center justify-center border border-white/5 bg-white/5"
        >
            <div className="text-4xl font-bold text-highlightAccent mb-2">
                {count}{suffix}
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-wider uppercase text-center">
                {title}
            </div>
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 bg-primaryBg relative">
            <div className="container mx-auto px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        <span className="text-gradient">About</span> Me
                    </h2>
                    <div className="w-24 h-1 bg-highlightAccent mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Image/Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full flex justify-center md:justify-start"
                    >
                        <div className="relative aspect-square w-full max-w-sm rounded-3xl p-1 group shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primaryAccent via-secondaryAccent to-highlightAccent rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute inset-1 bg-primaryBg rounded-[22px] z-0"></div>

                            {/* Profile Image */}
                            <div className="w-full h-full rounded-[22px] relative z-10 overflow-hidden bg-black">
                                <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay z-10 pointer-events-none group-hover:bg-transparent transition-all duration-500"></div>
                                <img src="/profile.jpg" alt="Zain Tahir" className="object-cover object-top w-full h-full group-hover:scale-110 filter contrast-110 saturate-110 transition-transform duration-700" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primaryAccent/20 rounded-full blur-2xl z-0"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-highlightAccent/20 rounded-full blur-2xl z-0"></div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1"
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6 border-l-4 border-primaryAccent pl-4">
                            Building Modern, Scalable, and User-Friendly Web Applications.
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            I am a passionate MERN Stack Developer focused on building modern, scalable, and user-friendly web applications. I enjoy transforming creative ideas into functional digital experiences using modern web technologies. With a strong eye for design and a focus on writing clean, reusable code, I bring concepts to life in the browser.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <StatCard title="Projects Completed" value="30" />
                            <StatCard title="Technologies. Learned" value="15" />
                            <StatCard title="GitHub Projects" value="40" />
                            <StatCard title="Happy Clients" value="10" />
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/Zain_Tahir_CV.pdf" // Placeholder link
                            target="_blank"
                            download
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            Download CV
                        </motion.a>

                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
