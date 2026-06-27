import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
    const navbarRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    // 1. Initial entry animation on page load
    useGSAP(() => {
        gsap.from(".nav-item", {
            y: -16,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.1
        });
    }, { scope: navbarRef });

    // 2. Mobile menu slide-in & stagger links animation
    useGSAP(() => {
        if (isOpen) {
            // Slide down the mobile drawer
            gsap.to(".mobile-drawer", {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power3.out"
            });
            // Cascading fade-in for links inside the drawer
            gsap.fromTo(".mobile-link", 
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power2.out", delay: 0.1 }
            );
        } else {
            // Hide the drawer smoothly
            gsap.to(".mobile-drawer", {
                y: "-100%",
                opacity: 0,
                duration: 0.3,
                ease: "power3.in"
            });
        }
    }, { dependencies: [isOpen], scope: navbarRef }); // Triggers whenever isOpen changes

    return (
        <nav ref={navbarRef} className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            {/* Main Navbar Bar */}
            <div className="flex items-center justify-between px-6 md:px-12 py-5 relative z-50 bg-white/90 backdrop-blur-md">
                {/* Logo */}
                <div className="nav-item text-lg font-bold tracking-tight text-gray-900 cursor-pointer">
                    Amit<span className="text-blue-600">.dev</span>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <a href="#about" className="nav-item hover:text-gray-900 transition-colors duration-200">About</a>
                    <a href="#skills" className="nav-item hover:text-gray-900 transition-colors duration-200">Skills</a>
                    <a href="#projects" className="nav-item hover:text-gray-900 transition-colors duration-200">Projects</a>
                    <a href="#experience" className="nav-item hover:text-gray-900 transition-colors duration-200">Experience</a>
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden md:block nav-item">
                    <a href="#contact" className="bg-gray-950 text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-200">
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <span className={`h-0.5 w-6 bg-gray-900 transition-transform duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`h-0.5 w-6 bg-gray-900 transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`h-0.5 w-6 bg-gray-900 transition-transform duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Drawer Overlay */}
            <div className="mobile-drawer fixed inset-x-0 top-0 h-screen bg-white border-b border-gray-200 pt-24 px-8 md:hidden flex flex-col gap-6 transform -translate-y-full opacity-0 pointer-events-none z-40 [&.pointer-events-none]:aria-hidden">
                {/* Dynamically toggle interactions based on state */}
                <div className={`flex flex-col gap-6 text-xl font-medium text-gray-800 ${isOpen ? '' : 'pointer-events-none'}`}>
                    <a href="#about" onClick={() => setIsOpen(false)} className="mobile-link hover:text-blue-600 transition-colors">About</a>
                    <a href="#skills" onClick={() => setIsOpen(false)} className="mobile-link hover:text-blue-600 transition-colors">Skills</a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="mobile-link hover:text-blue-600 transition-colors">Projects</a>
                    <a href="#experience" onClick={() => setIsOpen(false)} className="mobile-link hover:text-blue-600 transition-colors">Experience</a>
                    <hr className="border-gray-100 my-2" />
                    <a href="#contact" onClick={() => setIsOpen(false)} className="mobile-link bg-gray-950 text-white text-sm font-semibold py-3 rounded-lg text-center shadow-sm">
                        Let's Talk
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;