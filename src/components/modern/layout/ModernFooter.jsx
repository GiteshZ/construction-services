import React from 'react';
import { Link } from 'react-router-dom';
import useSmoothScroll from '../../../hooks/useSmoothScroll';
import Container from '../../ui/Container';
import '../../../styles/modern/ModernLayout.css';

const ModernFooter = () => {
    const { scrollToPath } = useSmoothScroll();

    return (
        <footer className="modernFooter">
            <Container className="modernFooterContent">
                <div className="modernFooterGrid">
                    <div>
                        <div className="modernFooterBrand">
                            ELITE<span style={{ color: 'var(--color-primary)' }}>BUILD</span>
                        </div>
                        <p className="modernFooterDescription">
                            Sculpting the skyline with precision engineering and architectural excellence since 2010.
                        </p>
                    </div>

                    <div>
                        <div className="modernContactInfoLabel">NAVIGATE</div>
                        <div className="modernFooterSection">
                            <Link to="/" onClick={(e) => scrollToPath(e, '/')} className="modernFooterLink">
                                Home
                            </Link>
                            <Link to="/#services" onClick={(e) => scrollToPath(e, '#services')} className="modernFooterLink">
                                Services
                            </Link>
                            <Link to="/#gallery" onClick={(e) => scrollToPath(e, '#gallery')} className="modernFooterLink">
                                Portfolio
                            </Link>
                            <Link to="/#contact" onClick={(e) => scrollToPath(e, '#contact')} className="modernFooterLink">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="modernContactInfoLabel">CONNECT</div>
                        <div className="modernFooterSection">
                            <div className="modernFooterLink">Instagram</div>
                            <div className="modernFooterLink">LinkedIn</div>
                            <div className="modernFooterLink">Twitter</div>
                        </div>
                    </div>
                </div>

                <div className="modernFooterBottom">
                    <p className="modernFooterCopyright">
                        © {new Date().getFullYear()} EliteBuild Construction Services. All rights reserved.
                    </p>
                    <div className="modernFooterLegal">
                        <span className="modernFooterLegalLink">Privacy Policy</span>
                        <span className="modernFooterLegalLink">Terms of Service</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default ModernFooter;
