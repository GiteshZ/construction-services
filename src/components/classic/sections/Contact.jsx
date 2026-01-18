import React, { useState } from 'react';
import Container from '../../ui/Container';
import Section from '../../ui/Section';
import Button from '../../ui/Button';
import '../../../styles/classic/Contact.css';

const Contact = () => {
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
        <Section id="contact" style={{ backgroundColor: '#0a0f1d' }}>
            <Container>
                <h2 className="section-title">Get In Touch</h2>
                <div className="contactWrapper">
                    <div className="contactInfo">
                        <h3 className="contactInfoTitle">Let's Build Together</h3>
                        <p className="contactInfoText">
                            Ready to transform your vision into an architectural masterpiece? Contact us today for a private consultation.
                        </p>
                        <ul className="contactList">
                            <li className="contactItem">
                                <div className="contactIcon">📍</div>
                                <span>123 Construction Ave, Builders City</span>
                            </li>
                            <li className="contactItem">
                                <div className="contactIcon">📞</div>
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="contactItem">
                                <div className="contactIcon">✉️</div>
                                <span>projects@elitebuild.com</span>
                            </li>
                        </ul>
                    </div>

                    <form className="contactForm" onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <select
                                name="projectType"
                                className="form-input form-select"
                                value={formData.projectType}
                                onChange={handleChange}
                            >
                                <option>Project Type</option>
                                <option>Single Dwelling</option>
                                <option>Multi Dwelling</option>
                                <option>Multi-Storied Residential</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <textarea
                                name="details"
                                rows="5"
                                placeholder="Project Details"
                                className="form-input"
                                value={formData.details}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        {status === 'success' ? (
                            <div className="formSuccess">
                                <span className="successIcon">✓</span>
                                Message sent successfully! We'll be in touch soon.
                            </div>
                        ) : (
                            <Button
                                type="submit"
                                style={{ width: '100%' }}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending Request...' : 'Send Message'}
                            </Button>
                        )}
                    </form>
                </div>
            </Container>
        </Section>
    );
};

export default Contact;
