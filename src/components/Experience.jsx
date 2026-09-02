import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const educationData = [
    {
        title: 'DAE in Computer Information Technology',
        institute: 'Government College of Technology',
        date: '2019 - 2022',
        description: 'Learned core software engineering concepts, hardware basics, and programming.'
    }
];

const experienceData = [
    {
        title: 'Full-Stack Projects',
        institute: 'Personal & Freelance',
        date: '2025 - Present',
        description: 'Working on full-stack MERN projects with scalable architectures.'
    },
    {
        title: 'Building MERN Stack Applications',
        institute: 'MERN Stack Journey',
        date: '2024 - 2025',
        description: 'Developed e-commerce platforms, social networks, and RESTful APIs.'
    },
    {
        title: 'Learning React.js',
        institute: 'Frontend Focus',
        date: '2023 - 2024',
        description: 'Mastered component-based architecture, hooks, state management, and SPAs.'
    },
    {
        title: 'Learning Frontend Development',
        institute: 'Web Basics',
        date: '2022 - 2023',
        description: 'Gained solid foundation in HTML5, CSS3, JavaScript ES6+, and responsive design.'
    }
];

const TimelineItem = ({ data, index, isEducate }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-10 md:pl-0 w-full mb-12 md:max-w-[45%] md:even:ml-auto md:odd:mr-auto md:odd:text-right group"
        >
            <div className="md:hidden absolute left-0 top-1 w-6 h-6 rounded-full bg-primaryAccent border-4 border-[#0a0f1d] flex items-center justify-center glow-point">
                {isEducate ? <FaGraduationCap className="text-white text-[10px]" /> : <FaBriefcase className="text-white text-[10px]" />}
            </div>

            {/* Desktop Dot */}
            <div className={`hidden md:flex absolute top-1 w-8 h-8 rounded-full bg-primaryAccent border-4 border-[#0a0f1d] z-10 items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.6)] ${data.title.length % 2 === 0 ? 'left-[calc(111%+16px)]' : 'right-[calc(-11.1%-16px)]'} -translate-x-1/2 group-even:left-auto group-even:-left-[calc(11.1%+32px)]`}>
                {isEducate ? <FaGraduationCap className="text-white text-xs" /> : <FaBriefcase className="text-white text-xs" />}
            </div>

            <div className="glass p-6 rounded-2xl border border-white/10 hover:border-primaryAccent/50 transition-all hover:-translate-y-2">
                <span className="text-sm font-bold text-primaryAccent block mb-2">{data.date}</span>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{data.title}</h3>
                <span className="text-sm font-medium text-gray-400 block mb-4">{data.institute}</span>
                <p className="text-gray-400 text-sm">{data.description}</p>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-primaryBg relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Experience & <span className="text-gradient">Education</span>
                    </h2>
                    <div className="w-24 h-1 bg-highlightAccent mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Main timeline line */}
                    <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primaryAccent via-secondaryAccent to-transparent transform md:-translate-x-1/2 opacity-30"></div>

                    <div className="w-full">
                        {educationData.map((edu, index) => (
                            <TimelineItem key={edu.title} data={edu} index={index} isEducate={true} />
                        ))}
                        {experienceData.map((exp, index) => (
                            <TimelineItem key={exp.title} data={exp} index={index + 10} isEducate={false} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
