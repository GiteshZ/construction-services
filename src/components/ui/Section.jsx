import React from 'react';

const Section = ({ children, id, className = "", style = {}, padding = "5rem 0" }) => {
    return (
        <section
            id={id}
            className={className}
            style={{
                padding: padding,
                ...style
            }}
        >
            {children}
        </section>
    );
};

export default Section;
