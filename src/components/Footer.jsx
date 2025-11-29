import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-[var(--text-secondary)] text-sm">
            <p>&copy; {new Date().getFullYear()} Deniel Nankov. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
