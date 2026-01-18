import React from 'react';
import singleDwellingImg from '../../../assets/single_dwelling.png';
import Container from '../../ui/Container';
import Section from '../../ui/Section';

const ModernServices = () => {
    const services = [
        {
            title: 'SINGLE DWELLING',
            description: 'Custom-designed luxury homes tailored to your lifestyle. We handle everything from architectural planning to the final coat of paint.',
            image: singleDwellingImg,
            identifier: '01'
        },
        {
            title: 'MULTI DWELLING',
            description: 'Efficient and modern townhouses and duplexes. Optimizing space and value without compromising on quality or aesthetics.',
            image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            identifier: '02'
        },
        {
            title: 'HIGH-RISE',
            description: 'Modern residential apartment complexes built with structural integrity and state-of-the-art engineering.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            identifier: '03'
        },
    ];

    return (
        <Section id="services" style={{ backgroundColor: '#000', paddingLeft: '100px', paddingBottom: '10rem' }}>
            <Container style={{ margin: 0, padding: '0 4rem' }}>
                <div style={{ marginBottom: '6rem' }}>
                    <span style={{ color: 'var(--color-primary)', letterSpacing: '8px', fontSize: '0.8rem', fontWeight: 'bold' }}>EXPERTISE</span>
                    <h2 style={{ fontSize: '4rem', fontWeight: 900, color: '#fff', marginTop: '1rem' }}>CORE SERVICES</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <div key={index} style={{ position: 'relative', overflow: 'hidden', height: '500px', backgroundColor: '#111' }}>
                            <img
                                src={service.image}
                                alt={service.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: 0.5,
                                    filter: 'grayscale(100%)',
                                    transition: 'all 0.5s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.opacity = 0.8;
                                    e.target.style.filter = 'grayscale(0%)';
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.opacity = 0.5;
                                    e.target.style.filter = 'grayscale(100%)';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '2.5rem',
                                background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                                pointerEvents: 'none'
                            }}>
                                <span style={{ color: 'var(--color-primary)', fontSize: '3rem', fontWeight: 900, opacity: 0.3, position: 'absolute', top: '1rem', right: '2rem' }}>
                                    {service.identifier}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>{service.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#888', lineHeight: 1.6 }}>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default ModernServices;
