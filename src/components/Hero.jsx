import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="py-20 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    This is my personal website <br />
                    <span className="text-gradient">and you can find my projects and experience so far.</span>
                </h1>

                <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                    I'm Deniel Nankov, a Computer Science student at <span className="text-[var(--text-primary)] font-bold">Yale University</span> and a Division I swimmer.
                    I combine quantitative rigor from physics and math with modern software engineering to build high-performance systems.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="group bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 dark:hover:bg-gray-200 transition-colors"
                    >
                        View Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="mailto:deniel.nankov@yale.edu"
                        className="px-6 py-3 rounded-full font-medium border border-gray-200 hover:bg-gray-100 dark:border-dark-border dark:hover:bg-dark-card transition-colors"
                    >
                        Contact Me
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
