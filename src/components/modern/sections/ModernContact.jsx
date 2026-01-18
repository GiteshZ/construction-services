import React, { useState } from 'react';
import Container from '../../ui/Container';
import Section from '../../ui/Section';
import Button from '../../ui/Button';
import '../../../styles/modern/ModernLayout.css';

const ModernContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Project Type',
        details: ''
    });
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', projectType: 'Project Type', details: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Section id="contact" className="modernSection">
            <Container className="modernContainer">
                <div className="modernContactGrid">
                    {/* Contact Info */}
                    <div>
                        <span className="modernSectionLabel">CONNECT</span>
                        <h2 className="modernContactTitle">
                            LET'S BUILD<br />TOGETHER
                        </h2>

                        <div className="modernContactInfo">
                            <div className="modernContactInfoItem">
                                <div className="modernContactInfoLabel">LOCATION</div>
                                <div className="modernContactInfoValue">123 Construction Ave<br />Builders City</div>
                            </div>
                            <div className="modernContactInfoItem">
                                <div className="modernContactInfoLabel">PHONE</div>
                                <div className="modernContactInfoValue">(555) 123-4567</div>
                            </div>
                            <div className="modernContactInfoItem">
                                <div className="modernContactInfoLabel">EMAIL</div>
                                <div className="modernContactInfoValue">projects@elitebuild.com</div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="modernContactForm">
                        <div className="modernFormGrid">
                            <input
                                type="text"
                                name="name"
                                placeholder="YOUR NAME"
                                className="modernInput"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="YOUR EMAIL"
                                className="modernInput"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <select
                            name="projectType"
                            className="modernInput"
                            style={{ marginBottom: '2rem', appearance: 'none' }}
                            value={formData.projectType}
                            onChange={handleChange}
                        >
                            <option>PROJECT TYPE</option>
                            <option>Single Dwelling</option>
                            <option>Multi Dwelling</option>
                            <option>Multi-Storied Residential</option>
                        </select>

                        <textarea
                            name="details"
                            rows="5"
                            placeholder="PROJECT DETAILS"
                            className="modernInput modernTextarea"
                            style={{ marginBottom: '3rem' }}
                            value={formData.details}
                            onChange={handleChange}
                            required
                        ></textarea>

                        {status === 'success' ? (
                            <div className="modernFormSuccess">
                                ✓ MESSAGE SENT SUCCESSFULLY
                            </div>
                        ) : (
                            <Button
                                type="submit"
                                style={{
                                    width: '100%',
                                    borderRadius: 0,
                                    padding: '1.5rem',
                                    fontSize: '0.8rem',
                                    letterSpacing: '3px'
                                }}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                            </Button>
                        )}
                    </form>
                </div>
            </Container>
        </Section>
    );
};

export default ModernContact;
