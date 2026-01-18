import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Project Type',
        details: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate API call
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

    const formStyle = {
        backgroundColor: 'var(--color-surface)',
        padding: '3.5rem',
        borderRadius: '16px',
        flex: 1,
        border: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    };

    const infoStyle = {
        flex: 1,
        padding: '1rem',
    };

    const listItemStyle = {
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        fontSize: '1.1rem',
    };

    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: '#0a0f1d' }}>
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-wrapper" style={{ display: 'flex', gap: '5rem', flexWrap: 'wrap', alignItems: 'center' }}>

                    <div style={infoStyle}>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Let's Build Together</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Ready to transform your vision into an architectural masterpiece? Contact us today for a private consultation.
                        </p>
                        <ul>
                            <li style={listItemStyle}>
                                <div style={{ minWidth: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontSize: '1.5rem' }}>📍</div>
                                <span>123 Construction Ave, Builders City</span>
                            </li>
                            <li style={listItemStyle}>
                                <div style={{ minWidth: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontSize: '1.5rem' }}>📞</div>
                                <span>(555) 123-4567</span>
                            </li>
                            <li style={listItemStyle}>
                                <div style={{ minWidth: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontSize: '1.5rem' }}>✉️</div>
                                <span>projects@elitebuild.com</span>
                            </li>
                        </ul>
                    </div>

                    <form style={formStyle} onSubmit={handleSubmit}>
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
                            <div style={{ color: '#10b981', textAlign: 'center', padding: '1.25rem', border: '1px solid #10b981', borderRadius: '8px', backgroundColor: 'rgba(16, 185, 129, 0.05)', fontWeight: 500 }}>
                                <span style={{ fontSize: '1.25rem', marginRight: '0.5rem' }}>✓</span>
                                Message sent successfully! We'll be in touch soon.
                            </div>
                        ) : (
                            <button
                                className="btn btn-primary"
                                style={{ width: '100%', padding: '1.25rem', fontSize: '1rem', borderRadius: '8px', opacity: status === 'sending' ? 0.7 : 1 }}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending Request...' : 'Send Message'}
                            </button>
                        )}
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
