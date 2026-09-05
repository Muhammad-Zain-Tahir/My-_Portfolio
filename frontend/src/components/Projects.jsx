import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const categories = ['All', 'React', 'MERN', 'JavaScript', 'Backend'];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = projectsData.filter(project => {
        if (filter === 'All') return true;
        return project.category === filter;
    });

    return (
        <section id="projects" className="py-24 bg-secondaryBg relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-highlightAccent mx-auto rounded-full mb-8"></div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-gradient-to-r from-primaryAccent to-highlightAccent text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative rounded-2xl overflow-hidden glass border border-white/10"
                            >
                                {/* Project Image Image Holder */}
                                <div className="w-full h-72 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/40 z-20 group-hover:bg-black/70 transition-colors duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 gap-4">
                                        <a href={project.liveUrl || "#"} target="_blank" rel="noreferrer" className="px-6 py-2 bg-primaryAccent text-white font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-blue-600">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                        <a href={project.githubUrl || "#"} target="_blank" rel="noreferrer" className="px-6 py-2 bg-gray-800 text-white font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 flex items-center gap-2 hover:bg-gray-700 hover:text-white border border-gray-600">
                                            <FaGithub /> GitHub
                                        </a>
                                    </div>
                                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Project Info */}
                                <div className="p-6 relative z-30 bg-black/60 backdrop-blur-sm -mt-2">
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-white/10 text-cyan-400">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;
