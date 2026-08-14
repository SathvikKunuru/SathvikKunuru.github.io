import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AmbientBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        // Only track on desktop to save performance on mobile
        if (window.innerWidth > 768) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
            {/* Static background glows */}
            <div className="bg-glow top-left"></div>
            <div className="bg-glow bottom-right"></div>
            
            {/* Dynamic mouse-following glow */}
            <motion.div
                animate={{
                    x: mousePosition.x - 200,
                    y: mousePosition.y - 200,
                }}
                transition={{
                    type: 'tween',
                    ease: 'easeOut',
                    duration: 0.5
                }}
                style={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(80px)',
                }}
            />
        </div>
    );
};

export default AmbientBackground;
