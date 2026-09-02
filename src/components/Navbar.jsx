import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { Link } from 'react-scroll';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{ color: 'var(--text-primary)' }}
                        className="text-2xl font-bold flex items-center gap-1"
                    >
                        <span className="text-gradient">Zain</span>
                        <span>Tahir</span>
                        <span className="text-primaryAccent">.</span>
                    </motion.div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="!text-primaryAccent border-b-2 border-primaryAccent"
                            style={{ color: 'var(--text-secondary)' }}
                            className="cursor-pointer text-sm font-medium transition-colors hover:text-primaryAccent"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}
                        className="p-2 rounded-full transition-colors"
                    >
                        {theme === 'dark' ? (
                            <HiSun className="text-yellow-400 text-xl" />
                        ) : (
                            <HiMoon className="text-purple-400 text-xl" />
                        )}
                    </motion.button>
                </div>

                {/* Mobile menu toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        style={{ background: 'var(--glass-bg)' }}
                        className="p-2 rounded-full"
                    >
                        {theme === 'dark' ? <HiSun className="text-yellow-400 text-xl" /> : <HiMoon className="text-purple-400 text-xl" />}
                    </motion.button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ color: 'var(--text-primary)' }}
                        className="focus:outline-none p-1"
                    >
                        {isOpen ? <HiX className="text-3xl" /> : <HiMenuAlt3 className="text-3xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full glass-dark flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-semibold text-gray-200 hover:text-primaryAccent transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
