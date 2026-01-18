import React from 'react';

const Hero = () => {
    const heroStyle = {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.6)), url("./src/assets/hero_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
    };

    const contentStyle = {
        maxWidth: '800px',
        padding: '0 1rem',
    };

    const titleStyle = {

        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
        fontWeight: 800,
        marginBottom: '1.5rem',
        color: '#fff',
        lineHeight: 1.1,
    };

    const subtitleStyle = {
        fontSize: '1.25rem',
        color: 'var(--color-text-muted)',
        marginBottom: '2.5rem',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    return (
        <section style={heroStyle}>
            <div className="container" style={contentStyle}>
                <h1 style={titleStyle}>
                    Building Your <br />
                    <span style={{ color: 'var(--color-primary)' }}>Dreams Into Reality</span>
                </h1>
                <p style={subtitleStyle}>
                    Specializing in premium single dwelling, multi-dwelling, and high-rise residential construction. Quality craftsmanship meets modern design.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#contact" className="btn btn-primary">Start Your Project</a>
                    <a href="#services" className="btn" style={{ border: '1px solid white', color: 'white' }}>View Services</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
