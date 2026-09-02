import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaArrowUp, FaHeart, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', hoverClass: 'hover:bg-gray-700 hover:text-white', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', hoverClass: 'hover:bg-blue-600 hover:text-white', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: 'https://wa.me/923266797217', hoverClass: 'hover:bg-green-500 hover:text-white', label: 'WhatsApp' },
    { icon: FaInstagram, href: 'https://instagram.com', hoverClass: 'hover:bg-pink-600 hover:text-white', label: 'Instagram' },
];

const navLinks = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
    return (
        <footer
            style={{
                background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
                borderColor: 'var(--border-color)',
            }}
            className="relative pt-20 pb-8 border-t z-20 overflow-hidden"
        >
            {/* Glowing background blobs — hidden in light mode via opacity */}
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-primaryAccent/[0.07] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondaryAccent/[0.07] rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Top Row */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16"
                >
                    {/* Brand */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-4">
                        <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl font-extrabold tracking-tight">
                            <span className="text-gradient">Zain</span> Tahir
                            <span className="text-primaryAccent">.</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)' }} className="text-sm leading-relaxed">
                            MERN Stack Developer crafting modern, scalable, and blazing-fast web experiences. Let's build something extraordinary.
                        </p>
                        {/* Mini contact info */}
                        <div className="flex flex-col gap-2 mt-2">
                            <a href="mailto:muhammadzaintahir214@gmail.com" style={{ color: 'var(--text-muted)' }} className="flex items-center gap-2 text-xs hover:text-primaryAccent transition-colors">
                                <FaEnvelope className="text-primaryAccent" /> muhammadzaintahir214@gmail.com
                            </a>
                            <a href="https://wa.me/923266797217" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} className="flex items-center gap-2 text-xs hover:text-green-400 transition-colors">
                                <FaWhatsapp className="text-green-400" /> +92 326 6797217
                            </a>
                            <span style={{ color: 'var(--text-muted)' }} className="flex items-center gap-2 text-xs">
                                <FaMapMarkerAlt className="text-secondaryAccent" /> Bhakkar, Pakistan
                            </span>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-4">
                        <h3 style={{ color: 'var(--text-primary)' }} className="font-bold tracking-widest uppercase text-sm">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-2">
                            {navLinks.map(name => (
                                <li key={name}>
                                    <Link
                                        to={name.toLowerCase()}
                                        smooth
                                        duration={500}
                                        style={{ color: 'var(--text-secondary)' }}
                                        className="text-sm cursor-pointer hover:text-primaryAccent transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-3 h-[1px] bg-primaryAccent opacity-0 group-hover:opacity-100 transition-all" />
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end gap-4">
                        <h3 style={{ color: 'var(--text-primary)' }} className="font-bold tracking-widest uppercase text-sm">
                            Connect
                        </h3>
                        <div className="flex gap-3 flex-wrap justify-center md:justify-end">
                            {socialLinks.map(({ icon: Icon, href, hoverClass, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.15, y: -4 }}
                                    whileTap={{ scale: 0.9 }}
                                    title={label}
                                    style={{
                                        background: 'var(--glass-bg)',
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-secondary)',
                                    }}
                                    className={`w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${hoverClass}`}
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>

                        {/* Back to top */}
                        <Link to="home" smooth duration={1000} className="cursor-pointer mt-6">
                            <motion.div
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="flex flex-col items-center gap-1 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all">
                                    <FaArrowUp className="text-lg group-hover:animate-bounce" />
                                </div>
                                <span style={{ color: 'var(--text-muted)' }} className="text-[10px] uppercase tracking-widest">Back to top</span>
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <div
                    style={{ borderColor: 'var(--border-color)' }}
                    className="border-t"
                />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-7">
                    <p style={{ color: 'var(--text-muted)' }} className="text-sm">
                        © 2026 <span className="text-gradient font-semibold">Zain Tahir</span>. All Rights Reserved.
                    </p>
                    <p style={{ color: 'var(--text-muted)' }} className="text-sm flex items-center gap-1">
                        Built with <FaHeart className="text-red-500 animate-pulse mx-1" /> using React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
