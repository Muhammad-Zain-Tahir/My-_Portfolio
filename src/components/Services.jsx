import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-primaryBg relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-gradient">Services</span>
                    </h2>
                    <div className="w-24 h-1 bg-secondaryAccent mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
                        I offer a full range of high-quality web development services to help you build your digital presence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass relative overflow-hidden rounded-2xl p-8 group border border-white/5 hover:border-primaryAccent/50 transition-all cursor-pointer h-full"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primaryAccent/0 to-secondaryAccent/0 group-hover:from-primaryAccent/20 group-hover:to-secondaryAccent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-black/40 flex items-center justify-center text-3xl text-primaryAccent mb-6 group-hover:scale-110 group-hover:text-white transition-all">
                                        <Icon />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primaryAccent transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Animated bottom border */}
                                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primaryAccent to-secondaryAccent group-hover:w-full transition-all duration-300"></span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
