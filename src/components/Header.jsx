import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                <Link to="/" style={logoStyle}>
                    <span style={{ fontSize: '2rem' }}>🏗️</span>
                    <span>ELITE<span style={accentStyle}>BUILD</span></span>
                </Link>
                <nav>
                    <ul style={{ display: 'flex', alignItems: 'center' }}>
                        <li><Link to="/" style={linkStyle}>Home</Link></li>
                        <li><a href="/#services" style={linkStyle}>Services</a></li>
                        <li><a href="/#contact" style={linkStyle}>Contact</a></li>
                        <li><a href="/#contact" className="btn btn-primary" style={{ marginLeft: '2rem', padding: '0.5rem 1.25rem' }}>Get Quote</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
