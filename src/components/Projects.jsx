import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Play } from 'lucide-react';

const projectsData = {
    software: [
        {
            title: "Verustruct Web App",
            description: "Architected and led the development of a comprehensive full-stack platform for 3D-printed housing. Key technical achievements include a custom browser-based 3D slicer for G-code generation, an AI-driven structural optimizer, and a real-time collaboration suite. This MVP was instrumental in securing $2M in seed funding.",
            tags: ["React", "Node.js", "Three.js", "AI Optimization", "Real-time"],
            links: {
                github: "https://github.com/kgao2004/VerustructWebApp",
                demo: null
            },
            videos: [
                "https://www.youtube.com/embed/kIU025hEXc8",
                "https://www.youtube.com/embed/eKqNWXsOy8A"
            ]
        },
        {
            title: "Satoshi",
            description: "Engineered high-performance, asynchronous data collectors for institutional-grade crypto and macro market data. Built for low-latency ingestion, this system handles massive datasets to power quantitative trading strategies and backtesting engines.",
            tags: ["Python", "AsyncIO", "Crypto", "Data Engineering", "High-Frequency"],
            links: {
                github: "https://github.com/deniel-nankov/Satoshi",
                demo: null
            }
        }
    ],
    data: [
        {
            title: "Quantitative RL Strategies",
            description: (
                <>
                    <p className="mb-4">
                        A comprehensive exploration of Reinforcement Learning (RL) applied to stochastic decision processes, drawing parallels between gaming strategies (Blackjack) and financial risk management. Also includes implementation of control systems (CartPole) using Gymnasium.
                    </p>
                    <p className="mb-4">
                        This project implements Q-learning agents to optimize decision-making under uncertainty, analyzing convergence properties and policy stability.
                    </p>
                    <div className="mb-4">
                        <strong className="text-white block mb-2">Proposed Research Extensions:</strong>
                        <ul className="list-disc list-inside space-y-1 text-gray-400">
                            <li><strong>HFT Adaptation:</strong> Adapting Q-Learning from Blackjack to Limit Order Books for High-Frequency Trading.</li>
                            <li><strong>Portfolio Optimization:</strong> Using Deep Q-Networks (DQN) for dynamic portfolio rebalancing vs. Mean-Variance.</li>
                            <li><strong>Behavioral Modeling:</strong> Inverse RL to model irrational retail trader behavior in volatile markets.</li>
                            <li><strong>Regime Stress Testing:</strong> Evaluating agent robustness under non-stationary win probabilities (market regime shifts).</li>
                        </ul>
                    </div>
                </>
            ),
            tags: ["Reinforcement Learning", "Q-Learning", "Python", "Gymnasium", "Risk Management"],
            links: {
                github: "https://github.com/deniel-nankov",
                demo: "/analysis/rl-strategies"
            }
        },
        {
            title: "FX Carry Trade Analysis",
            description: "A rigorous quantitative analysis of Foreign Exchange Carry Trade strategies over a 25-year horizon (2000-2025). Investigates excess returns, risk-adjusted performance (Sharpe ratios), and correlations with global equity markets using Python and Pandas.",
            tags: ["Jupyter", "Python", "Quantitative Finance", "Pandas", "Matplotlib"],
            links: {
                github: "https://github.com/deniel-nankov/Verdad_Case_Study",
                demo: "/analysis/fx-carry"
            }
        },
        {
            title: "Kalshi Gas Price Forecasting",
            description: "Developed predictive machine learning models to forecast natural gas prices for the Kalshi prediction market. Leveraged alternative data sources and advanced time-series analysis techniques to identify profitable trading opportunities with high statistical significance.",
            tags: ["Machine Learning", "Forecasting", "Python", "Scikit-learn", "Time-Series"],
            links: {
                github: "https://github.com/deniel-nankov/kalshi",
                demo: null
            }
        }
    ]
};

const ProjectCard = ({ project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="glass-panel p-6 rounded-2xl hover:border-primary-500/50 transition-colors group"
    >
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold group-hover:text-primary-400 transition-colors">{project.title}</h3>
            <div className="flex gap-3">
                {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                )}
                {project.links.demo && (
                    <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors">
                        {project.links.demo.startsWith('/') ? <ArrowUpRight size={20} /> : <ExternalLink size={20} />}
                    </a>
                )}
            </div>
        </div>

        <div className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</div>

        {project.videos && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {project.videos.map((video, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden border border-dark-border">
                        <iframe
                            src={video}
                            title={`${project.title} demo ${index + 1}`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                ))}
            </div>
        )}

        <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-dark-bg rounded-full text-xs font-medium text-gray-400 border border-dark-border">
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
);

const Projects = () => {
    const [activeTab, setActiveTab] = useState('software');

    return (
        <section id="projects" className="py-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
                    <p className="text-gray-400">A collection of projects spanning software engineering and quantitative finance.</p>
                </div>

                <div className="flex bg-dark-card p-1 rounded-full border border-dark-border">
                    <button
                        onClick={() => setActiveTab('software')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'software' ? 'bg-primary-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Software Engineering
                    </button>
                    <button
                        onClick={() => setActiveTab('data')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'data' ? 'bg-primary-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Data Science & Quant
                    </button>
                </div>
            </div>

            <motion.div layout className="grid grid-cols-1 gap-6">
                <AnimatePresence mode="popLayout">
                    {projectsData[activeTab].map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Projects;
