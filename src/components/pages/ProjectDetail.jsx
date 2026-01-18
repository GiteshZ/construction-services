import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../data/ProjectData';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Button from '../ui/Button';
import useSmoothScroll from '../../hooks/useSmoothScroll';
import '../../styles/ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const { scrollToPath } = useSmoothScroll();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <Section padding="10rem 0" style={{ textAlign: 'center' }}>
                <Container>
                    <h2>Project Not Found</h2>
                    <Button to="/" onClick={(e) => scrollToPath(e, '/')} style={{ marginTop: '2rem' }}>
                        Back to Home
                    </Button>
                </Container>
            </Section>
        );
    }

    const heroStyle = {
        background: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url(${project.image})`,
    };

    return (
        <div className="project-detail">
            <header className="projectHero" style={heroStyle}>
                <Container>
                    <h1 className="projectHeroTitle">{project.title}</h1>
                    <p className="projectHeroLocation">{project.location}</p>
                </Container>
            </header>

            <nav className="projectNav">
                <Container>
                    <Link to="/#gallery" className="backLink" onClick={(e) => scrollToPath(e, '#gallery')}>
                        ← Back to Portfolio
                    </Link>
                </Container>
            </nav>

            <main className="projectMain">
                <Container>
                    <div className="specGrid">
                        <div className="specItem">
                            <span className="specLabel">TOTAL SIZE</span>
                            <strong className="specValue">{project.specs.size}</strong>
                        </div>
                        <div className="specItem">
                            <span className="specLabel">PROJECT VALUE</span>
                            <strong className="specValue">{project.specs.value}</strong>
                        </div>
                        <div className="specItem">
                            <span className="specLabel">TIMELINE</span>
                            <strong className="specValue">{project.specs.duration}</strong>
                        </div>
                        <div className="specItem">
                            <span className="specLabel">ARCHITECT</span>
                            <strong className="specValue">{project.specs.architect}</strong>
                        </div>
                    </div>

                    <div className="projectContent">
                        <div>
                            <h2 className="overviewTitle">Project Overview</h2>
                            <p className="overviewText">{project.description}</p>
                        </div>

                        <div>
                            <h3 className="featuresTitle">Key Features</h3>
                            <ul className="featureList">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="featureItem">
                                        <span className="featureCheck">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </main>

            <Section className="ctaSection">
                <Container>
                    <h3 className="ctaTitle">Ready to start your own project?</h3>
                    <Button to="/#contact" onClick={(e) => scrollToPath(e, '#contact')}>
                        Contact Us Today
                    </Button>
                </Container>
            </Section>
        </div>
    );
};

export default ProjectDetail;
