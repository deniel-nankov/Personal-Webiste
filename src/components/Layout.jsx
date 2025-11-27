import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col pt-24 px-6">
            <Header />
            <main className="flex-grow max-w-5xl mx-auto w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
