import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: you can use heroicons or any icon lib

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#education", label: "Education" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#050414] text-white px-6 md:px-20 py-4 shadow">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">MyPortfolio</div>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-10">
                    {navLinks.map((link, i) => (
                        <li key={i}>
                            <a href={link.href} className="hover:text-blue-500">{link.label}</a>
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
                            <a href={link.href} className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>
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
