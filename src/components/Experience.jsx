import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        role: "Summer Fellow – KEEL Accelerator",
        company: "Keel",
        period: "Jul 2025 - Aug 2025",
        location: "New York, NY",
        description: "Supported startups in the accelerator program. Focused on front-end development for Verustruct's platform, enhancing user interface and experience."
    },
    {
        role: "Software Developer",
        company: "Verustruct",
        period: "May 2025 - Aug 2025",
        location: "New Haven, CT",
        description: "Led the full-stack development of a platform for designing 3D-printed housing. Engineered a custom 3D slicer, implemented an AI optimizer, and built secure authentication and real-time collaboration features. Contributed to raising $2M in funding."
    }
];

const Experience = () => {
    return (
        <section className="py-20 border-t border-dark-border">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-8 rounded-2xl"
                    >
                        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                            <div>
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <p className="text-primary-400 font-medium">{exp.company}</p>
                            </div>
                            <div className="flex flex-col md:items-end text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    <span>{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin size={14} />
                                    <span>{exp.location}</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-3xl">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
