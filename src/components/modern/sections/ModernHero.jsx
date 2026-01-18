import React from 'react';
import heroBg from '../../../assets/hero_bg.png';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import useSmoothScroll from '../../../hooks/useSmoothScroll';

const ModernHero = () => {
    const { scrollToPath } = useSmoothScroll();

    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '100px', // Compensate for sidebar
            backgroundColor: '#000',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50%',
                height: '100%',
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.4,
                maskImage: 'linear-gradient(to left, black, transparent)',
                WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
            }}></div>

            <Container style={{ margin: 0, paddingLeft: '4rem', zIndex: 1 }}>
                <h1 style={{
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    fontWeight: 900,
                    lineHeight: 0.9,
                    color: '#fff',
                    marginBottom: '2rem',
                    letterSpacing: '-2px'
                }}>
                    ELITE<br />
                    <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-primary)' }}>BUILD</span>
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: '#888',
                    maxWidth: '450px',
                    lineHeight: 1.6,
                    marginBottom: '3rem',
                    borderLeft: '2px solid var(--color-primary)',
                    paddingLeft: '1.5rem'
                }}>
                    We don't just build structures; we sculpt the skyline. Premium residential engineering for the bold.
                </p>
                <Button
                    onClick={(e) => scrollToPath(e, '#contact')}
                    style={{
                        borderRadius: 0,
                        padding: '1.5rem 3rem',
                        fontSize: '0.8rem',
                        letterSpacing: '2px'
                    }}
                >
                    EXPLORE PROJECTS
                </Button>
            </Container>
        </section>
    );
};

export default ModernHero;
