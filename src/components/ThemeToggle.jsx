import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`
                relative w-12 h-7 rounded-full transition-colors duration-300 focus:outline-none
                ${theme === 'dark' ? 'bg-green-500' : 'bg-gray-300'}
            `}
            aria-label="Toggle Theme"
        >
            <div
                className={`
                    absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-sm transform transition-transform duration-300
                    ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}
                `}
            />
        </button>
    );
};

export default ThemeToggle;
