import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSmoothScroll from '../../../hooks/useSmoothScroll';
import '../../../styles/modern/ModernHeader.css';

const ModernHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollToPath } = useSmoothScroll();

    const handleNavClick = (e, path) => {
        setMobileMenuOpen(false);
        scrollToPath(e, path);
    };

    return (
        <>
            <aside className="modernNav">
                <Link to="/" className="modernLogo" onClick={(e) => handleNavClick(e, '/')}>
                    EB
                </Link>

                {/* Desktop Navigation */}
                <Link to="/" className="modernNavLink" onClick={(e) => scrollToPath(e, '/')}>
                    HOME
                </Link>
                <Link to="/#services" className="modernNavLink" onClick={(e) => scrollToPath(e, '#services')}>
                    SERVICES
                </Link>
                <Link to="/#gallery" className="modernNavLink" onClick={(e) => scrollToPath(e, '#gallery')}>
                    PORTFOLIO
                </Link>
                <Link to="/#contact" className="modernNavLink" onClick={(e) => scrollToPath(e, '#contact')}>
                    CONTACT
                </Link>

                <div className="modernNavDivider"></div>

                {/* Hamburger Menu Button (Mobile/Tablet) */}
                <button
                    className="modernHamburger"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={mobileMenuOpen ? 'active' : ''}></span>
                    <span className={mobileMenuOpen ? 'active' : ''}></span>
                    <span className={mobileMenuOpen ? 'active' : ''}></span>
                </button>
            </aside>

            {/* Mobile Navigation */}
            <nav className={`modernMobileNav ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="modernMobileNavList">
                    <li><Link to="/" className="modernMobileLink" onClick={(e) => handleNavClick(e, '/')}>HOME</Link></li>
                    <li><Link to="/#services" className="modernMobileLink" onClick={(e) => handleNavClick(e, '#services')}>SERVICES</Link></li>
                    <li><Link to="/#gallery" className="modernMobileLink" onClick={(e) => handleNavClick(e, '#gallery')}>PORTFOLIO</Link></li>
                    <li><Link to="/#contact" className="modernMobileLink" onClick={(e) => handleNavClick(e, '#contact')}>CONTACT</Link></li>
                </ul>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="modernMobileOverlay"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}
        </>
    );
};

export default ModernHeader;
