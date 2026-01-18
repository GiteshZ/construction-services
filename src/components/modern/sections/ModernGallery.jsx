import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../../data/ProjectData';
import Container from '../../ui/Container';
import Section from '../../ui/Section';
import '../../../styles/modern/ModernLayout.css';

const ModernGallery = () => {
    return (
        <Section id="gallery" className="modernSection">
            <Container className="modernContainer">
                <div className="modernSectionHeader">
                    <span className="modernSectionLabel">PORTFOLIO</span>
                    <h2 className="modernSectionTitle">RECENT WORK</h2>
                </div>

                <div className="modernGalleryGrid">
                    {projects.map((project) => (
                        <Link
                            to={`/project/${project.id}`}
                            key={project.id}
                            className="modernGalleryItem"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="modernGalleryImage"
                            />
                            <div className="modernGalleryOverlay">
                                <h3 className="modernGalleryTitle">
                                    {project.title}
                                </h3>
                                <p className="modernGalleryLocation">
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
