import React from 'react';
import { Link } from 'react-router-dom';
import useSmoothScroll from '../../../hooks/useSmoothScroll';
import Container from '../../ui/Container';

const ModernFooter = () => {
    const { scrollToPath } = useSmoothScroll();

    return (
        <footer style={{ backgroundColor: '#000', paddingLeft: '100px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Container style={{ margin: 0, padding: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>
                            ELITE<span style={{ color: 'var(--color-primary)' }}>BUILD</span>
                        </div>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.8, maxWidth: '400px' }}>
                            Sculpting the skyline with precision engineering and architectural excellence since 2010.
                        </p>
                    </div>

                    <div>
                        <div style={{ color: 'var(--color-primary)', fontSize: '0.7rem', letterSpacing: '3px', marginBottom: '1.5rem' }}>NAVIGATE</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Link
                                to="/"
                                onClick={(e) => scrollToPath(e, '/')}
                                style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                                onMouseOver={(e) => e.target.style.color = '#fff'}
                                onMouseOut={(e) => e.target.style.color = '#888'}
                            >
                                Home
                            </Link>
                            <Link
                                to="/#services"
                                onClick={(e) => scrollToPath(e, '#services')}
                                style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                                onMouseOver={(e) => e.target.style.color = '#fff'}
                                onMouseOut={(e) => e.target.style.color = '#888'}
                            >
                                Services
                            </Link>
                            <Link
                                to="/#gallery"
                                onClick={(e) => scrollToPath(e, '#gallery')}
                                style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                                onMouseOver={(e) => e.target.style.color = '#fff'}
                                onMouseOut={(e) => e.target.style.color = '#888'}
                            >
                                Portfolio
                            </Link>
                            <Link
                                to="/#contact"
                                onClick={(e) => scrollToPath(e, '#contact')}
                                style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}
                                onMouseOver={(e) => e.target.style.color = '#fff'}
                                onMouseOut={(e) => e.target.style.color = '#888'}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div style={{ color: 'var(--color-primary)', fontSize: '0.7rem', letterSpacing: '3px', marginBottom: '1.5rem' }}>CONNECT</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ color: '#888', fontSize: '0.9rem' }}>Instagram</div>
                            <div style={{ color: '#888', fontSize: '0.9rem' }}>LinkedIn</div>
                            <div style={{ color: '#888', fontSize: '0.9rem' }}>Twitter</div>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <p style={{ color: '#444', fontSize: '0.8rem', margin: 0 }}>
                        © {new Date().getFullYear()} EliteBuild Construction Services. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <span style={{ color: '#444', fontSize: '0.8rem', cursor: 'pointer' }}>Privacy Policy</span>
                        <span style={{ color: '#444', fontSize: '0.8rem', cursor: 'pointer' }}>Terms of Service</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default ModernFooter;
