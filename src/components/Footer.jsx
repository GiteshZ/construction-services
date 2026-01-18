import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    const footerLinkStyle = {
        color: '#64748b',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        fontSize: '0.9rem',
        margin: '0 1rem',
    };

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

    return (
        <footer style={{ padding: '4rem 0', backgroundColor: '#020617', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <Link to="/" style={footerLinkStyle} onClick={(e) => scrollToPath(e, '/')} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#64748b'}>Home</Link>
                    <Link to="/#services" style={footerLinkStyle} onClick={(e) => scrollToPath(e, '/#services')} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#64748b'}>Services</Link>
                    <Link to="/#contact" style={footerLinkStyle} onClick={(e) => scrollToPath(e, '/#contact')} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#64748b'}>Contact</Link>
                </div>
                <p style={{ color: '#475569', fontSize: '0.85rem' }}>
                    &copy; {new Date().getFullYear()} EliteBuild Construction Services. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
