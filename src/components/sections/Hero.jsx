import React from 'react';
import heroBg from '../../assets/hero_bg.png';
import Container from '../ui/Container';
import Button from '../ui/Button';
import useSmoothScroll from '../../hooks/useSmoothScroll';
import '../../styles/Hero.css';

const Hero = () => {
    const { scrollToPath } = useSmoothScroll();

    const heroStyle = {
        background: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.6)), url("${heroBg}")`,
    };

    return (
        <section className="hero" style={heroStyle}>
            <Container className="heroContent">
                <h1 className="heroTitle">
                    Building Your <br />
                    <span className="heroTitleAccent">Dreams Into Reality</span>
                </h1>
                <p className="heroSubtitle">
                    Specializing in premium single dwelling, multi-dwelling, and high-rise residential construction. Quality craftsmanship meets modern design.
                </p>
                <div className="heroActions">
                    <Button onClick={(e) => scrollToPath(e, '#contact')} to="/#contact">
                        Start Your Project
                    </Button>
                    <Button variant="secondary" onClick={(e) => scrollToPath(e, '#services')} to="/#services">
                        View Services
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
