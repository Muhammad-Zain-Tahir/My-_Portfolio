import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 60, damping: 18, duration: 0.8 }
    }
};

const SkillItem = ({ skill, index }) => {
    const Icon = skill.icon;
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(59,130,246,0.25)' }}
            transition={{ type: 'spring', stiffness: 60, damping: 14 }}
            className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
            style={{ border: '1px solid var(--border-color)', transition: 'border-color 0.6s ease, box-shadow 0.6s ease' }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-primaryAccent/20 to-secondaryAccent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <div
                style={{ background: 'var(--bg-card-dark)', borderColor: 'var(--border-color)' }}
                className="relative h-full w-full backdrop-blur-xl rounded-xl p-7 flex flex-col gap-6 border group-hover:border-transparent transition-all z-10"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div style={{ background: 'var(--badge-bg)' }} className={`p-3 rounded-lg shadow-inner group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all ${skill.color}`}>
                            <Icon className="text-3xl" />
                        </div>
                        <span style={{ color: 'var(--text-primary)' }} className="font-bold text-lg tracking-wide">{skill.name}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                    <div className="flex justify-between items-end">
                        <span style={{ color: 'var(--text-muted)' }} className="text-xs uppercase tracking-widest font-semibold">Proficiency</span>
                        <span style={{ background: 'var(--glass-bg)', color: 'var(--text-primary)' }} className="text-sm font-mono font-bold px-2 py-1 rounded-md">{skill.level}%</span>
                    </div>
                    <div style={{ background: 'var(--progress-track)' }} className="h-3 w-full rounded-full overflow-hidden shadow-inner relative">
                        {/* Shimmer Effect Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] skew-x-12 z-20"></div>

                        {/* Animated Progress */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.1 + (index * 0.1), type: 'spring', bounce: 0.2 }}
                            className={`h-full rounded-full bg-gradient-to-r from-primaryAccent to-highlightAccent shadow-[0_0_10px_#3b82f6] relative z-10`}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-primaryBg relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primaryAccent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondaryAccent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-secondaryAccent font-mono tracking-widest uppercase mb-3 block text-sm font-semibold">My Expertise</span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryAccent via-highlightAccent to-secondaryAccent animate-gradient-x">Skills</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primaryAccent to-secondaryAccent mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                    <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        I specialize in creating high-performance, scalable web applications using modern technologies. Here is a breakdown of my technical toolkit.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-16">
                    {skillsData.map((categoryGroup, catIndex) => (
                        <motion.div
                            key={categoryGroup.category}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <motion.h3
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-3xl md:text-4xl font-bold text-white mb-10 flex items-center gap-4"
                            >
                                <div className="w-3 h-10 bg-gradient-to-b from-primaryAccent to-secondaryAccent rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                                {categoryGroup.category}
                            </motion.h3>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.15 }
                                    }
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {categoryGroup.items.map((skill, index) => (
                                    <SkillItem key={skill.name} skill={skill} index={index} />
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
