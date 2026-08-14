import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            // Scale up on links, buttons, and interactive cards
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('.glass-card') ||
                target.closest('.nav-links a')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            backgroundColor: 'transparent',
            border: '2px solid var(--accent-cyan)'
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: 1.5,
            backgroundColor: 'rgba(6, 182, 212, 0.1)',
            border: '2px solid var(--accent-cyan)'
        }
    };

    return (
        <motion.div
            className="custom-cursor"
            variants={variants}
            animate={isHovering ? "hover" : "default"}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
        />
    );
};

export default CustomCursor;
