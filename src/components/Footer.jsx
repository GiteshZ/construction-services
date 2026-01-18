import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', backgroundColor: '#020617', textAlign: 'center', color: '#64748b' }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} EliteBuild Construction Services. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
