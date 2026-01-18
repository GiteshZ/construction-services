import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSmoothScroll from '../../hooks/useSmoothScroll';
import Container from '../../ui/Container';
import '../../../styles/classic/Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollToPath } = useSmoothScroll();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'headerScrolled' : 'headerTransparent'}`}>
            <Container className="nav">
                <Link to="/" className="logo" onClick={(e) => scrollToPath(e, '/')}>
                    <span style={{ fontSize: '2rem' }}>🏗️</span>
                    <span>ELITE<span className="accent">BUILD</span></span>
                </Link>
                <nav>
                    <ul className="navList">
                        <li><Link to="/" className="link" onClick={(e) => scrollToPath(e, '/')}>Home</Link></li>
                        <li><Link to="/#services" className="link" onClick={(e) => scrollToPath(e, '#services')}>Services</Link></li>
                        <li><Link to="/#gallery" className="link" onClick={(e) => scrollToPath(e, '#gallery')}>Portfolio</Link></li>
                        <li><Link to="/#contact" className="link" onClick={(e) => scrollToPath(e, '#contact')}>Contact</Link></li>
                        <li><Link to="/#contact" className="btn btn-primary quoteBtn" onClick={(e) => scrollToPath(e, '#contact')}>Get Quote</Link></li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
