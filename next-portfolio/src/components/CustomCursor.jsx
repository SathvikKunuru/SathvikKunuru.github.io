"use client";
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    // Raw mouse coordinates
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoothed coordinates for the UFO physics
    const smoothX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.8 });
    const smoothY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.8 });

    // Velocity tracking for drag tilt
    const velocityX = useVelocity(smoothX);
    const velocityY = useVelocity(smoothY);

    // Transform velocity into rotation. 
    // "drag tilt opposite to movement": moving right (positive velocityX) tilts left (negative rotateZ)
    const rotateZ = useTransform(velocityX, [-2000, 2000], [60, -60], { clamp: true });
    // Moving down (positive velocityY) pitches forward (negative rotateX)
    const rotateX = useTransform(velocityY, [-2000, 2000], [60, -60], { clamp: true });

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'input' ||
                target.closest('.glass-card') ||
                target.closest('.nav-links a') ||
                target.closest('.jarvis-search-box')
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
    }, [mouseX, mouseY]);

    // Calculate light beam offset based on tilt so the light "projects" onto the background
    // If the UFO tilts left (negative rotateZ), the light should cast slightly to the right.
    const lightOffsetX = useTransform(rotateZ, [-60, 60], [100, -100]);
    const lightOffsetY = useTransform(rotateX, [-60, 60], [100, -100]);

    // Combine smoothed mouse position with the light projection offset
    const projectedLightX = useTransform(() => smoothX.get() + lightOffsetX.get());
    const projectedLightY = useTransform(() => smoothY.get() + lightOffsetY.get());

    return (
        <>
            {/* The Spotlight projecting INTO the screen onto the background surface */}
            <motion.div
                className="ufo-spotlight"
                style={{
                    x: projectedLightX,
                    y: projectedLightY,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.9 : 0.5
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            
            {/* The Physical UFO Ship with drag tilt physics */}
            <motion.div
                className="ufo-ship"
                style={{
                    x: smoothX,
                    y: smoothY,
                    rotateZ: rotateZ,
                    rotateX: rotateX,
                    perspective: 1000
                }}
                animate={{
                    scale: isHovering ? 1.3 : 1
                }}
            >
                {/* SVG Flying Saucer (offset by -24px to center the 48x48 icon on the mouse) */}
                <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '-24px', marginTop: '-24px' }}>
                    <defs>
                        <linearGradient id="saucerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#9ca3af" />
                            <stop offset="100%" stopColor="#4b5563" />
                        </linearGradient>
                        <radialGradient id="glassGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.4" />
                        </radialGradient>
                    </defs>
                    
                    {/* Main Saucer Body */}
                    <ellipse cx="50" cy="50" rx="45" ry="15" fill="url(#saucerGrad)" stroke="#d1d5db" strokeWidth="2"/>
                    
                    {/* Saucer Lights */}
                    <circle cx="20" cy="50" r="3" fill="#06b6d4" />
                    <circle cx="50" cy="55" r="3" fill="#06b6d4" />
                    <circle cx="80" cy="50" r="3" fill="#06b6d4" />

                    {/* The Alien inside the dome (Normal Silhouette) */}
                    <motion.circle 
                        cx="50" cy="35" r="8" fill="#1f2937" 
                        animate={{ opacity: isHovering ? 0 : 0.8 }} 
                    />

                    {/* Hovering Alien - Pops up and mashes a red button */}
                    <motion.g
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: isHovering ? 1 : 0, y: isHovering ? 0 : 15 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {/* Green Alien Head */}
                        <ellipse cx="50" cy="30" rx="8" ry="7" fill="#39ff14" />
                        {/* Eyes */}
                        <ellipse cx="46" cy="29" rx="2" ry="3" fill="#000" transform="rotate(-25 46 29)" />
                        <ellipse cx="54" cy="29" rx="2" ry="3" fill="#000" transform="rotate(25 54 29)" />
                        
                        {/* Control Console */}
                        <rect x="42" y="37" width="16" height="8" rx="2" fill="#374151" stroke="#1f2937" strokeWidth="1" />
                        
                        {/* Red Button (Animates down) */}
                        <motion.rect 
                            x="46" y="35" width="8" height="4" rx="1" fill="#ef4444" 
                            animate={{ y: isHovering ? [35, 37, 35] : 35 }}
                            transition={{ repeat: Infinity, duration: 0.4, ease: "easeInOut" }}
                        />

                        {/* Alien Arm smashing the button */}
                        <motion.path 
                            d="M 56 34 Q 52 30 50 35" 
                            fill="none" stroke="#39ff14" strokeWidth="2.5" strokeLinecap="round"
                            animate={{ d: isHovering ? ["M 56 34 Q 52 30 50 35", "M 56 34 Q 52 30 50 37", "M 56 34 Q 52 30 50 35"] : "M 56 34 Q 52 30 50 35" }}
                            transition={{ repeat: Infinity, duration: 0.4, ease: "easeInOut" }}
                        />
                    </motion.g>

                    {/* Glass Cockpit Dome (Flies open when hovering) */}
                    <motion.path 
                        d="M 25 45 Q 50 5 75 45 Z" 
                        fill="url(#glassGrad)" stroke="#a78bfa" strokeWidth="2"
                        animate={{ 
                            y: isHovering ? -20 : 0,
                            opacity: isHovering ? 0 : 1,
                            scale: isHovering ? 0.5 : 1
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </svg>
            </motion.div>
        </>
    );
};

export default CustomCursor;
