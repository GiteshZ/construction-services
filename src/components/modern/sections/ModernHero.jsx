import React from 'react';
import heroBg from '../../../assets/hero_bg.png';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import useSmoothScroll from '../../../hooks/useSmoothScroll';
import '../../../styles/modern/ModernHero.css';

const ModernHero = () => {
    const { scrollToPath } = useSmoothScroll();

    return (
        <section className="modernHero">
            <div
                className="modernHeroBg"
                style={{ backgroundImage: `url(${heroBg})` }}
            ></div>

            <Container className="modernHeroContent">
                <h1 className="modernHeroTitle">
                    ELITE<br />
                    <span className="modernHeroTitleOutline">BUILD</span>
                </h1>
                <p className="modernHeroSubtitle">
                    We don't just build structures; we sculpt the skyline. Premium residential engineering for the bold.
                </p>
                <Button
                    onClick={(e) => scrollToPath(e, '#contact')}
                    className="modernHeroButton"
                >
                    EXPLORE PROJECTS
                </Button>
            </Container>
        </section>
    );
};

export default ModernHero;
