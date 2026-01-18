import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../../data/ProjectData';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import useSmoothScroll from '../../../hooks/useSmoothScroll';

const ModernProjectDetail = () => {
    const { id } = useParams();
    const { scrollToPath } = useSmoothScroll();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div style={{ padding: '10rem 0 10rem 100px', textAlign: 'center', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
                <Container>
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>PROJECT NOT FOUND</h2>
                    <Button to="/" onClick={(e) => scrollToPath(e, '/')} style={{ borderRadius: 0 }}>
                        BACK TO HOME
                    </Button>
                </Container>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: '#000', color: '#fff', paddingLeft: '100px' }}>
            {/* Hero Section */}
            <div style={{
                height: '80vh',
                position: 'relative',
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%)'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8))',
                    display: 'flex',
                    alignItems: 'flex-end'
                }}>
                    <Container style={{ margin: 0, padding: '4rem', width: '100%' }}>
                        <Link
                            to="/#gallery"
                            onClick={(e) => scrollToPath(e, '#gallery')}
                            style={{
                                color: '#888',
                                textDecoration: 'none',
                                fontSize: '0.8rem',
                                letterSpacing: '3px',
                                display: 'inline-block',
                                marginBottom: '2rem'
                            }}
                        >
                            ← BACK TO PORTFOLIO
                        </Link>
                        <h1 style={{ fontSize: '5rem', fontWeight: 900, marginBottom: '1rem', lineHeight: 1 }}>
                            {project.title}
                        </h1>
                        <p style={{ color: 'var(--color-primary)', fontSize: '1.2rem', letterSpacing: '3px' }}>
                            {project.location}
                        </p>
                    </Container>
                </div>
            </div>

            {/* Specs Grid */}
            <Container style={{ margin: 0, padding: '6rem 4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem', marginBottom: '8rem' }}>
                    <div>
                        <div style={{ color: 'var(--color-primary)', fontSize: '0.7rem', letterSpacing: '3px', marginBottom: '1rem' }}>SIZE</div>
                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>{project.specs.size}</div>
                    </div>
                    <div>
                        <div style={{ color: 'var(--color-primary)', fontSize: '0.7rem', letterSpacing: '3px', marginBottom: '1rem' }}>VALUE</div>
                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>{project.specs.value}</div>
                    </div>
                    <div>
                        <div style={{ color: 'var(--color-primary)', fontSize: '0.7rem', letterSpacing: '3px', marginBottom: '1rem' }}>TIMELINE</div>
                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>{project.specs.duration}</div>
                    </div>
                    <div>
                        <div style={{ color: 'var(--color-primary)', fontSize: '0.7rem', letterSpacing: '3px', marginBottom: '1rem' }}>ARCHITECT</div>
                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>{project.specs.architect}</div>
                    </div>
                </div>

                {/* Content Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '6rem' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>OVERVIEW</h2>
                        <p style={{ fontSize: '1.1rem', color: '#888', lineHeight: 1.8 }}>
                            {project.description}
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--color-primary)' }}>KEY FEATURES</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {project.features.map((feature, index) => (
                                <li key={index} style={{
                                    marginBottom: '1.5rem',
                                    paddingLeft: '2rem',
                                    position: 'relative',
                                    color: '#888',
                                    fontSize: '0.95rem'
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: 0,
                                        color: 'var(--color-primary)',
                                        fontWeight: 'bold'
                                    }}>
                                        —
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>

            {/* CTA Section */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '6rem 4rem', textAlign: 'center' }}>
                <Container style={{ margin: 0 }}>
                    <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem' }}>START YOUR PROJECT</h3>
                    <Button
                        to="/#contact"
                        onClick={(e) => scrollToPath(e, '#contact')}
                        style={{ borderRadius: 0, padding: '1.5rem 3rem', fontSize: '0.8rem', letterSpacing: '3px' }}
                    >
                        GET IN TOUCH
                    </Button>
                </Container>
            </div>
        </div>
    );
};

export default ModernProjectDetail;
