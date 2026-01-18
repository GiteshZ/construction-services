import React from 'react';
import singleDwellingImg from '../../assets/single_dwelling.png';
import Container from '../ui/Container';
import Section from '../ui/Section';
import '../../styles/Services.css';

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

    return (
        <Section id="services">
            <Container>
                <h2 className="section-title">Our Expertise</h2>
                <div className="servicesGrid">
                    {services.map((service, index) => (
                        <div key={index} className="serviceCard">
                            <div className="serviceImageContainer">
                                <img src={service.image} alt={service.title} className="serviceImage" />
                            </div>
                            <div className="serviceContent">
                                <h3 className="serviceTitle">{service.title}</h3>
                                <p className="serviceText">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Services;
