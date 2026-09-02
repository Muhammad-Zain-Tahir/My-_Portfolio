import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState(''); // 'idle', 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate Backend API Request since backend is disconnected
        setTimeout(() => {
            if (formData.name && formData.email && formData.message) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });

                setTimeout(() => setStatus('idle'), 5000); // Clear after 5s
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-primaryBg relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-primaryAccent mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind or want to collaborate? Feel free to reach out. I'm currently available for new opportunities.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <div className="glass p-8 rounded-2xl flex items-start gap-6 group hover:border-primaryAccent/50 transition-colors">
                            <div className="p-4 rounded-full bg-primaryAccent/20 text-primaryAccent group-hover:bg-primaryAccent group-hover:text-white transition-colors">
                                <FaEnvelope className="text-2xl" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Email Me</h4>
                                <a href="mailto:muhammadzaintahir214@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">muhammadzaintahir214@gmail.com</a>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-2xl flex items-start gap-6 group hover:border-green-500/50 transition-colors">
                            <div className="p-4 rounded-full bg-green-500/20 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <FaWhatsapp className="text-2xl" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">WhatsApp</h4>
                                <a href="https://wa.me/923266797217" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">+92 326 6797217</a>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-2xl flex items-start gap-6 group hover:border-secondaryAccent/50 transition-colors">
                            <div className="p-4 rounded-full bg-secondaryAccent/20 text-secondaryAccent group-hover:bg-secondaryAccent group-hover:text-white transition-colors">
                                <FaMapMarkerAlt className="text-2xl" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Location</h4>
                                <p className="text-gray-400">Bhakkar, Pakistan</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-[1.5]"
                    >
                        <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl flex flex-col gap-6 relative overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-400">Your Name</label>
                                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primaryAccent transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-400">Your Email</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primaryAccent transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-400">Subject</label>
                                <input required type="text" name="subject" value={formData.subject} onChange={handleChange} className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primaryAccent transition-colors" placeholder="Project Inquiry" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea required name="message" value={formData.message} onChange={handleChange} rows="5" className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primaryAccent transition-colors resize-none" placeholder="Hello, I'd like to talk about..."></textarea>
                            </div>

                            {/* Toast Simulation Message inside form */}
                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-400 text-center">
                                        Message sent successfully!
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-400 text-center">
                                        Failed to send message.
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                disabled={status === 'submitting'}
                                type="submit"
                                className={`mt-4 py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-lg transition-all ${status === 'submitting' ? 'bg-gray-600 text-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white hover:shadow-lg hover:shadow-purple-500/40 hover:-translate-y-1'}`}
                            >
                                {status === 'submitting' ? 'Sending...' : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
