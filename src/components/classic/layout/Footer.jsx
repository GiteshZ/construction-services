import React from 'react';
import { Link } from 'react-router-dom';
import useSmoothScroll from '../../../hooks/useSmoothScroll';
import Container from '../../ui/Container';
import '../../../styles/classic/Footer.css';

const Footer = () => {
    const { scrollToPath } = useSmoothScroll();

    return (
        <footer className="footer" style={{ backgroundColor: '#020617' }}>
            <Container className="footerContent">
                <div className="footerLinks">
                    <Link to="/" className="footerLink" onClick={(e) => scrollToPath(e, '/')}>Home</Link>
                    <Link to="/#services" className="footerLink" onClick={(e) => scrollToPath(e, '#services')}>Services</Link>
                    <Link to="/#gallery" className="footerLink" onClick={(e) => scrollToPath(e, '#gallery')}>Portfolio</Link>
                    <Link to="/#contact" className="footerLink" onClick={(e) => scrollToPath(e, '#contact')}>Contact</Link>
                </div>
                <p className="copyright">
                    &copy; {new Date().getFullYear()} EliteBuild Construction Services. All rights reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
