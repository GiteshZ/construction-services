import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/ProjectData';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
                <h2>Project Not Found</h2>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Home</Link>
            </div>
        );
    }

    const heroStyle = {
        height: '60vh',
        background: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
    };

    const contentSectionStyle = {
        padding: '5rem 0',
    };

    const specGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        backgroundColor: 'var(--color-surface)',
        padding: '2.5rem',
        borderRadius: '12px',
        marginBottom: '4rem',
    };

    const specItemStyle = {
        textAlign: 'center',
    };

    return (
        <div className="project-detail">
            <header style={heroStyle}>
                <div className="container">
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1rem' }}>{project.title}</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-primary)' }}>{project.location}</p>
                </div>
            </header>

            <nav style={{ padding: '1.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="container">
                    <Link to="/" style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        ← Back to Portfolio
                    </Link>
                </div>
            </nav>

            <main className="container" style={contentSectionStyle}>
                <div style={specGridStyle}>
                    <div style={specItemStyle}>
                        <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem' }}>TOTAL SIZE</span>
                        <strong style={{ fontSize: '1.25rem' }}>{project.specs.size}</strong>
                    </div>
                    <div style={specItemStyle}>
                        <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem' }}>PROJECT VALUE</span>
                        <strong style={{ fontSize: '1.25rem' }}>{project.specs.value}</strong>
                    </div>
                    <div style={specItemStyle}>
                        <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem' }}>TIMELINE</span>
                        <strong style={{ fontSize: '1.25rem' }}>{project.specs.duration}</strong>
                    </div>
                    <div style={specItemStyle}>
                        <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem' }}>ARCHITECT</span>
                        <strong style={{ fontSize: '1.25rem' }}>{project.specs.architect}</strong>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'start' }} className="project-content-grid">
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Project Overview</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                            {project.description}
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Key Features</h3>
                        <ul style={{ color: 'var(--color-text-muted)' }}>
                            {project.features.map((feature, index) => (
                                <li key={index} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--color-primary)' }}>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>

            <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '2rem' }}>Ready to start your own project?</h3>
                    <Link to="/#contact" className="btn btn-primary">Contact Us Today</Link>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
