import React from 'react';
import singleDwellingImg from '../../../assets/single_dwelling.png';
import Container from '../../ui/Container';
import Section from '../../ui/Section';
import '../../../styles/modern/ModernLayout.css';

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
        <Section id="services" className="modernSection">
            <Container className="modernContainer">
                <div className="modernSectionHeader">
                    <span className="modernSectionLabel">EXPERTISE</span>
                    <h2 className="modernSectionTitle">CORE SERVICES</h2>
                </div>

                <div className="modernServicesGrid">
                    {services.map((service, index) => (
                        <div key={index} className="modernServiceCard">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="modernServiceImage"
                            />
                            <div className="modernServiceContent">
                                <span className="modernServiceIdentifier">
                                    {service.identifier}
                                </span>
                                <h3 className="modernServiceTitle">{service.title}</h3>
                                <p className="modernServiceDescription">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default ModernServices;
