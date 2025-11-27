import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-5xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between">
                <div className="font-heading font-bold text-xl tracking-tight">
                    Deniel<span className="text-primary-400">Nankov</span>
                </div>

                <nav className="flex items-center gap-6">
                    <a
                        href="https://github.com/deniel-nankov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/deniel-nankov-84139922a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:deniel.nankov@yale.edu"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
