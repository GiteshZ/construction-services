import React from 'react';

const Button = ({ children, onClick, type = "button", variant = "primary", className = "", style = {}, disabled = false, to, ...props }) => {
    const baseStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.875rem 1.75rem',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        textDecoration: 'none',
        gap: '0.5rem',
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-bg)',
        },
        secondary: {
            backgroundColor: 'transparent',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        outline: {
            backgroundColor: 'transparent',
            color: 'var(--color-primary)',
            border: '1px solid var(--color-primary)',
        }
    };

    const finalStyle = { ...baseStyle, ...variants[variant], ...style };

    if (to) {
        return (
            <a href={to} className={`btn ${className}`} style={finalStyle} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn ${className}`}
            style={finalStyle}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
