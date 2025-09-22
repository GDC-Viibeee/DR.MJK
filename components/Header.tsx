
import React, { useState, useEffect } from 'react';
import type { NavRefs } from '../types';

interface HeaderProps {
    navRefs: NavRefs;
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ navRefs, scrollToSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'About', ref: navRefs.about },
        { name: 'Specializations', ref: navRefs.specializations },
        { name: 'Research', ref: navRefs.research },
        { name: 'Achievements', ref: navRefs.achievements },
        { name: 'Contact', ref: navRefs.contact },
    ];
    
    const handleLinkClick = (ref: React.RefObject<HTMLDivElement>) => {
        scrollToSection(ref);
        setIsMenuOpen(false);
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/50 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold font-rubik tracking-wider text-white">
                    Dr. MJK
                </div>
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleLinkClick(link.ref)}
                            className="text-gray-300 hover:text-cyan-400 transition duration-300 font-medium"
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900/80 backdrop-blur-lg">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleLinkClick(link.ref)}
                                className="text-gray-300 hover:text-cyan-400 transition duration-300 font-medium py-2"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
