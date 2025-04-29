import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#education", label: "Education" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" }
    ];

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // adjust offset for fixed navbar
            let current = '';
            for (let link of navLinks) {
                const section = document.querySelector(link.href);
                if (section && section.offsetTop <= scrollPosition) {
                    current = link.href;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on load

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkClasses = (href) =>
        `hover:text-blue-500 transition-colors ${activeSection === href ? 'text-blue-500' : ''
        }`;

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#050414] text-white px-6 md:px-20 py-4 shadow">
            <div className="flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">MyPortfolio</a>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-10">
                    {navLinks.map((link, i) => (
                        <li key={i}>
                            <a href={link.href} className={getLinkClasses(link.href)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden mt-4 flex flex-col space-y-4 bg-[#0a0a23] p-4 rounded shadow">
                    {navLinks.map((link, i) => (
                        <li key={i}>
                            <a
                                href={link.href}
                                className={getLinkClasses(link.href)}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
