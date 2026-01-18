import React, { useState } from 'react';
import Container from '../../ui/Container';
import Section from '../../ui/Section';
import Button from '../../ui/Button';

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

    const inputStyle = {
        width: '100%',
        padding: '1.5rem',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        color: '#fff',
        fontSize: '1rem',
        fontFamily: 'inherit',
        outline: 'none',
        transition: 'border-color 0.3s ease',
        boxSizing: 'border-box'
    };

    return (
        <Section id="contact" style={{ backgroundColor: '#000', paddingLeft: '100px', paddingBottom: '10rem' }}>
            <Container style={{ margin: 0, padding: '0 4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }}>
                    {/* Contact Info */}
                    <div>
                        <span style={{ color: 'var(--color-primary)', letterSpacing: '8px', fontSize: '0.8rem', fontWeight: 'bold' }}>CONNECT</span>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginTop: '1rem', marginBottom: '3rem', lineHeight: 1.1 }}>
                            LET'S BUILD<br />TOGETHER
                        </h2>

                        <div style={{ marginBottom: '3rem' }}>
                            <div style={{ marginBottom: '2.5rem' }}>
                                <div style={{ color: 'var(--color-primary)', fontSize: '0.7rem', letterSpacing: '3px', marginBottom: '0.5rem' }}>LOCATION</div>
                                <div style={{ color: '#fff', fontSize: '1.1rem' }}>123 Construction Ave<br />Builders City</div>
                            </div>
                            <div style={{ marginBottom: '2.5rem' }}>
                                <div style={{ color: 'var(--color-primary)', fontSize: '0.7rem', letterSpacing: '3px', marginBottom: '0.5rem' }}>PHONE</div>
                                <div style={{ color: '#fff', fontSize: '1.1rem' }}>(555) 123-4567</div>
                            </div>
                            <div>
                                <div style={{ color: 'var(--color-primary)', fontSize: '0.7rem', letterSpacing: '3px', marginBottom: '0.5rem' }}>EMAIL</div>
                                <div style={{ color: '#fff', fontSize: '1.1rem' }}>projects@elitebuild.com</div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} style={{ paddingTop: '4rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="YOUR NAME"
                                style={inputStyle}
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="YOUR EMAIL"
                                style={inputStyle}
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                                required
                            />
                        </div>

                        <select
                            name="projectType"
                            style={{ ...inputStyle, marginBottom: '2rem', appearance: 'none' }}
                            value={formData.projectType}
                            onChange={handleChange}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
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
                            style={{ ...inputStyle, marginBottom: '3rem', resize: 'vertical' }}
                            value={formData.details}
                            onChange={handleChange}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                            required
                        ></textarea>

                        {status === 'success' ? (
                            <div style={{
                                color: 'var(--color-primary)',
                                padding: '1.5rem',
                                border: '1px solid var(--color-primary)',
                                textAlign: 'center',
                                letterSpacing: '2px',
                                fontSize: '0.9rem'
                            }}>
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
