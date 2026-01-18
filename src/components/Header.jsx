import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToPath = (e, path) => {
        if (location.pathname === '/') {
            e.preventDefault();
            if (path === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (path.startsWith('/#')) {
                const id = path.substring(2);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '1rem 0' : '2rem 0',
        backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const logoStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: '1px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        textDecoration: 'none',
    };

    const accentStyle = {
        color: 'var(--color-primary)',
    };

    const linkStyle = {
        marginLeft: '2rem',
        fontWeight: 500,
        fontSize: '0.95rem',
    };

    return (
        <header style={headerStyle}>
            <div className="container" style={navStyle}>
                <Link to="/" style={logoStyle} onClick={(e) => scrollToPath(e, '/')}>
                    <span style={{ fontSize: '2rem' }}>🏗️</span>
                    <span>ELITE<span style={accentStyle}>BUILD</span></span>
                </Link>
                <nav>
                    <ul style={{ display: 'flex', alignItems: 'center' }}>
                        <li><Link to="/" style={linkStyle} onClick={(e) => scrollToPath(e, '/')}>Home</Link></li>
                        <li><Link to="/#services" style={linkStyle} onClick={(e) => scrollToPath(e, '/#services')}>Services</Link></li>
                        <li><Link to="/#contact" style={linkStyle} onClick={(e) => scrollToPath(e, '/#contact')}>Contact</Link></li>
                        <li><Link to="/#contact" className="btn btn-primary" style={{ marginLeft: '2rem', padding: '0.5rem 1.25rem' }} onClick={(e) => scrollToPath(e, '/#contact')}>Get Quote</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
