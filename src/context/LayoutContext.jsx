import React, { createContext, useContext, useState, useEffect } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    // Check localStorage for saved layout preference, default to 'classic'
    const [layout, setLayout] = useState(() => {
        return localStorage.getItem('site-layout') || 'classic';
    });

    useEffect(() => {
        localStorage.setItem('site-layout', layout);
    }, [layout]);

    const toggleLayout = () => {
        setLayout(prev => prev === 'classic' ? 'modern' : 'classic');
    };

    return (
        <LayoutContext.Provider value={{ layout, setLayout, toggleLayout }}>
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayout must be used within a LayoutProvider');
    }
    return context;
};
