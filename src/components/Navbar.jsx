import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-logo">
                        <a href="https://andryanweb.com" className="logo-text" style={{ textDecoration: 'none' }}>avix</a>
                    </div>

                    <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#clients">Clients</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#awards">Awards</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <button className="btn btn-primary navbar-cta">Get Started</button>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
