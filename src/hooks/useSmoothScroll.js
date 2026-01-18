import { useLocation } from 'react-router-dom';

const useSmoothScroll = () => {
    const location = useLocation();

    const scrollToPath = (e, path) => {
        if (location.pathname === '/') {
            if (path === '/' || path === '') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (path.startsWith('/#') || path.startsWith('#')) {
                const id = path.replace(/^\/?#/, '');
                const element = document.getElementById(id);
                if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return { scrollToPath };
};

export default useSmoothScroll;
