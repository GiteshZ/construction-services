import React from 'react';
import singleDwellingImg from '../assets/single_dwelling.png';

const Services = () => {
    const services = [
        {
            title: 'Single Dwelling',
            description: 'Custom-designed luxury homes tailored to your lifestyle. We handle everything from architectural planning to the final coat of paint.',
            image: singleDwellingImg,
        },
        {
            title: 'Multi Dwelling',
            description: 'Efficient and modern townhouses and duplexes. Optimizing space and value without compromising on quality or aesthetics.',
            image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'High-Rise Residential',
            description: 'Modern residential apartment complexes built with structural integrity and state-of-the-art engineering.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
    ];

    const cardStyle = {
        backgroundColor: 'var(--color-surface)',
        borderRadius: '12px',
        overflow: 'hidden',
        textAlign: 'left',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: '1px solid rgba(255, 255, 255, 0.1)',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
    };

    const imageContainerStyle = {
        height: '240px',
        width: '100%',
        overflow: 'hidden',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
    };

    const contentPaddingStyle = {
        padding: '2rem',
    };

    return (
        <section id="services" className="section-padding">
            <div className="container">
                <h2 className="section-title">Our Expertise</h2>
                <div style={gridStyle}>
                    {services.map((service, index) => (
                        <div key={index} style={cardStyle} className="service-card">
                            <div style={imageContainerStyle}>
                                <img src={service.image} alt={service.title} style={imageStyle} />
                            </div>
                            <div style={contentPaddingStyle}>
                                <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
