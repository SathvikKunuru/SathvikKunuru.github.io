"use client";
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { skillsData } from './Skills';
import { projectsData } from './Projects';
import { FaSearch } from 'react-icons/fa';
import './SkillsGraph.css';

// Dynamically import ForceGraph3D to avoid SSR issues
const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), { ssr: false });

const createTextSprite = (text, color, opacity) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = '24px sans-serif';
    const textWidth = context.measureText(text).width;
    canvas.width = textWidth + 10;
    canvas.height = 30;
    context.font = '24px sans-serif';
    context.fillStyle = color;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.globalAlpha = opacity;
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, depthTest: false, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(canvas.width / 3, canvas.height / 3, 1);
    return sprite;
};

const SkillsGraph = () => {
    const fgRef = useRef();
    const [searchQuery, setSearchQuery] = useState('');
    const [graphData, setGraphData] = useState({ nodes: [], links: [] });
    const [windowSize, setWindowSize] = useState({ width: 800, height: 600 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleResize = () => {
            const wrapper = document.querySelector('.graph-wrapper');
            if (wrapper) {
                // Exactly match the width of the bordered wrapper div
                setWindowSize({ width: wrapper.clientWidth, height: window.innerHeight * 0.75 });
            }
        };

        handleResize(); // Set initially
        
        // Delay a check to ensure CSS layout has finished applying
        const timeout = setTimeout(handleResize, 150);

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Process data into nodes and links
    useEffect(() => {
        const nodesMap = new Map();
        const links = [];

        const addNode = (id, group, val, categoryName = null) => {
            if (!nodesMap.has(id)) {
                nodesMap.set(id, { id, name: id, group, val, categoryName });
            }
        };

        // Root node
        addNode("Sathvik", "root", 25);

        // Process Skills (Categories -> Tags)
        skillsData.forEach(skill => {
            const category = skill.category;
            addNode(category, "category", 15, category);
            links.push({ source: "Sathvik", target: category });

            skill.tags.forEach(tag => {
                addNode(tag, "skill", 8, category);
                links.push({ source: category, target: tag });
            });
        });

        // Process Projects (Tech -> Project)
        projectsData.forEach(project => {
            const projName = project.title;
            addNode(projName, "project", 12);

            project.tech.forEach(tech => {
                addNode(tech, "skill", 8); // Ensure tech exists as a skill node
                links.push({ source: tech, target: projName });
            });
        });

        setGraphData({ nodes: Array.from(nodesMap.values()), links });
    }, []);

    // Filter nodes based on search
    const filteredNodes = useMemo(() => {
        if (!searchQuery) return new Set(graphData.nodes.map(n => n.id));
        const lowerQ = searchQuery.toLowerCase();
        const matched = graphData.nodes.filter(n => n.id.toLowerCase().includes(lowerQ));
        return new Set(matched.map(n => n.id));
    }, [searchQuery, graphData]);

    const getCategoryColor = (categoryName) => {
        switch (categoryName) {
            case 'Embedded': return '#00ffff'; // Neon Cyan
            case 'AI': return '#ff00ff';       // Neon Magenta
            case 'Web Apps': return '#39ff14'; // Neon Green
            case 'Apps': return '#ff3366';     // Neon Pink/Red
            case 'Other': return '#ffaa00';    // Neon Orange
            default: return '#0088ff';         // Fallback blue
        }
    };

    const getNodeColor = (node) => {
        if (node.group === 'root') return '#ffffff';
        if (node.group === 'project') return '#ff3333'; // Deep red for projects
        if (node.categoryName) return getCategoryColor(node.categoryName);
        return '#aaaaaa';
    };

    const flyToNode = useCallback(node => {
        if (!fgRef.current || !node || node.x === undefined) return;
        const distance = 150; // slightly further back for readability
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

        fgRef.current.cameraPosition(
            { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
            node, // lookAt ({ x, y, z })
            1500  // ms transition duration
        );
    }, [fgRef]);

    const handleNodeClick = useCallback(node => {
        flyToNode(node);
    }, [flyToNode]);

    // Auto-fly to node when searching (debounced)
    useEffect(() => {
        if (!searchQuery || filteredNodes.size === 0) return;

        const timeoutId = setTimeout(() => {
            const lowerQ = searchQuery.toLowerCase();
            // Prefer exact matches, otherwise just take the first partial match
            let targetNode = graphData.nodes.find(n => n.id.toLowerCase() === lowerQ);
            if (!targetNode) {
                const firstMatchId = Array.from(filteredNodes)[0];
                targetNode = graphData.nodes.find(n => n.id === firstMatchId);
            }
            flyToNode(targetNode);
        }, 800); // Wait 800ms after user stops typing to trigger camera

        return () => clearTimeout(timeoutId);
    }, [searchQuery, filteredNodes, graphData, flyToNode]);

    if (!mounted) return null;

    return (
        <section id="skills" className="section graph-section">
            <div className="container" id="graph-container" style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                {/* Jarvis UI Search Bar */}
                <motion.div 
                    className="jarvis-search-container"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="jarvis-search-box">
                        <FaSearch className="jarvis-icon" />
                        <input 
                            type="text" 
                            placeholder="Find inside Sathvik’s Neural Net…" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="jarvis-input"
                        />
                        <div className="jarvis-glow"></div>
                    </div>
                </motion.div>

                {/* 3D Force Graph */}
                <div className="graph-wrapper" style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0, 255, 255, 0.2)', boxShadow: '0 0 30px rgba(0, 255, 255, 0.05)', width: '100%', marginTop: '20px' }}>
                    <ForceGraph3D
                        ref={fgRef}
                        width={windowSize.width}
                        height={windowSize.height}
                        graphData={graphData}
                        nodeLabel="id"
                        nodeColor={node => {
                            if (searchQuery && !filteredNodes.has(node.id)) return 'rgba(255, 255, 255, 0.1)';
                            return getNodeColor(node);
                        }}
                        nodeOpacity={node => (searchQuery && !filteredNodes.has(node.id)) ? 0.1 : 0.9}
                        nodeResolution={16}
                        nodeVal="val"
                        nodeThreeObjectExtend={true}
                        nodeThreeObject={node => {
                            const isFaded = searchQuery && !filteredNodes.has(node.id);
                            const opacity = isFaded ? 0.05 : 1.0;
                            const color = getNodeColor(node);
                            const sprite = createTextSprite(node.id, color, opacity);
                            // Position it slightly above the sphere
                            sprite.position.set(0, (Math.cbrt(node.val) * 1.5) + 4, 0); 
                            return sprite;
                        }}
                        linkColor={() => 'rgba(255, 255, 255, 0.4)'}
                        linkOpacity={0.5}
                        linkWidth={1.2}
                        backgroundColor="#050810"
                        onEngineStop={() => {
                            if (fgRef.current) {
                                // Force camera much closer to the center cluster
                                fgRef.current.cameraPosition({ x: 0, y: 0, z: 300 }, { x: 0, y: 0, z: 0 }, 1500);
                            }
                        }}
                        onNodeClick={handleNodeClick}
                        enableNodeDrag={false}
                    />
                </div>
            </div>
        </section>
    );
};

export default SkillsGraph;
