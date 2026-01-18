import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../../data/ProjectData';
import Container from '../../ui/Container';
import Section from '../../ui/Section';

const ModernGallery = () => {
    return (
        <Section id="gallery" style={{ backgroundColor: '#000', paddingLeft: '100px', paddingBottom: '10rem' }}>
            <Container style={{ margin: 0, padding: '0 4rem' }}>
                <div style={{ marginBottom: '6rem' }}>
                    <span style={{ color: 'var(--color-primary)', letterSpacing: '8px', fontSize: '0.8rem', fontWeight: 'bold' }}>PORTFOLIO</span>
                    <h2 style={{ fontSize: '4rem', fontWeight: 900, color: '#fff', marginTop: '1rem' }}>RECENT WORK</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                    {projects.map((project, index) => (
                        <Link
                            to={`/project/${project.id}`}
                            key={project.id}
                            style={{
                                position: 'relative',
                                height: index === 0 ? '600px' : '400px',
                                overflow: 'hidden',
                                textDecoration: 'none',
                                display: 'block'
                            }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(100%) brightness(0.6)',
                                    transition: 'all 0.6s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.filter = 'grayscale(0%) brightness(1)';
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.filter = 'grayscale(100%) brightness(0.6)';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '2.5rem',
                                background: 'linear-gradient(transparent, rgba(0,0,0,0.95))',
                                transform: 'translateY(100%)',
                                transition: 'transform 0.4s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(100%)'}
                            >
                                <h3 style={{
                                    fontSize: '1.8rem',
                                    fontWeight: 800,
                                    color: '#fff',
                                    marginBottom: '0.5rem',
                                    letterSpacing: '1px'
                                }}>
                                    {project.title}
                                </h3>
                                <p style={{
                                    color: 'var(--color-primary)',
                                    fontSize: '0.9rem',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase'
                                }}>
                                    {project.location}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default ModernGallery;
