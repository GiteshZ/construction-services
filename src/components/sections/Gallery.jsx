import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/ProjectData';
import Container from '../ui/Container';
import Section from '../ui/Section';
import '../../styles/Gallery.css';

const Gallery = () => {
    return (
        <Section id="gallery" style={{ backgroundColor: 'var(--color-bg)' }}>
            <Container>
                <h2 className="section-title">Recent Projects</h2>
                <div className="galleryGrid">
                    {projects.map((project) => (
                        <Link to={`/project/${project.id}`} key={project.id} className="galleryItem">
                            <img src={project.image} alt={project.title} className="galleryImage" />
                            <div className="galleryOverlay">
                                <h4 className="galleryTitle">{project.title}</h4>
                                <p className="galleryLocation">{project.location}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Gallery;
