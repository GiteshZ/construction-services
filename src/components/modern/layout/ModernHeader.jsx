import React from 'react';
import { Link } from 'react-router-dom';
import useSmoothScroll from '../../../hooks/useSmoothScroll';
import Container from '../../ui/Container';

const ModernHeader = () => {
    const { scrollToPath } = useSmoothScroll();

    const navStyle = {
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: '100px',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        borderRight: '1px solid rgba(255,255,255,0.1)'
    };

    const linkStyle = {
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        color: '#fff',
        textDecoration: 'none',
        margin: '2rem 0',
        fontSize: '0.8rem',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        opacity: 0.6,
        transition: 'opacity 0.3s ease, color 0.3s ease'
    };

    return (
        <aside style={navStyle}>
            <div style={{ position: 'absolute', top: '2rem' }}>
                <Link to="/" style={{ color: 'var(--color-primary)', fontSize: '1.5rem', textDecoration: 'none', fontWeight: 900 }}>EB</Link>
            </div>

            <Link to="/" style={linkStyle} onClick={(e) => scrollToPath(e, '/')} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.6}>HOME</Link>
            <Link to="/#services" style={linkStyle} onClick={(e) => scrollToPath(e, '#services')} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.6}>SERVICES</Link>
            <Link to="/#gallery" style={linkStyle} onClick={(e) => scrollToPath(e, '#gallery')} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.6}>PORTFOLIO</Link>
            <Link to="/#contact" style={linkStyle} onClick={(e) => scrollToPath(e, '#contact')} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.6}>CONTACT</Link>

            <div style={{ position: 'absolute', bottom: '2rem' }}>
                <div style={{ width: '1px', height: '60px', backgroundColor: 'var(--color-primary)', margin: '0 auto' }}></div>
            </div>
        </aside>
    );
};

export default ModernHeader;
