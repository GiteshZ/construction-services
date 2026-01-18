import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/ProjectData';

const Gallery = () => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '1.5rem',
    };

    const itemStyle = {
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        height: '300px',
        cursor: 'pointer',
    };

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
    };

    const overlayStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
        padding: '1.5rem',
        color: 'white',
        transform: 'translateY(20px)',
        opacity: 0,
        transition: 'all 0.3s ease',
    };

    return (
        <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <h2 className="section-title">Recent Projects</h2>
                <div style={gridStyle}>
                    {projects.map((project) => (
                        <Link to={`/project/${project.id}`} key={project.id} style={itemStyle} className="gallery-item">
                            <img src={project.image} alt={project.title} style={imgStyle} />
                            <div className="gallery-overlay" style={overlayStyle}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{project.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>{project.location}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
