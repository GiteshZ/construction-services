import React from 'react';

const Container = ({ children, style = {}, className = "" }) => {
    return (
        <div
            className={`container ${className}`}
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem',
                width: '100%',
                ...style
            }}
        >
            {children}
        </div>
    );
};

export default Container;
