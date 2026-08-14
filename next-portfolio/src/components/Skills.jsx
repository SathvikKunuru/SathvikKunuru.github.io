"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMicrochip, FaBrain, FaCode, FaTools, FaLaptopCode, FaProjectDiagram, FaMobileAlt } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import './Skills.css';

const skillsData = [
    {
        category: "Embedded",
        icon: <FaMicrochip />,
        title: "Embedded & IoT",
        description: "STM32, Raspberry Pi, Jetson Nano, ARM Cortex, Zephyr RTOS, Linux, Bootloaders.",
        tags: ["I2C", "SPI", "UART", "CAN", "MQTT", "LoRa"]
    },
    {
        category: "AI",
        icon: <FaBrain />,
        title: "AI & Machine Learning",
        description: "Deep Learning, Neural Networks, LLMs, Edge Computing, Computer Vision.",
        tags: ["YOLO", "CNNs", "PyTorch", "Transformers", "RAG"]
    },
    {
        category: "Web Apps",
        icon: <FaLaptopCode />,
        title: "Web Development",
        description: "Building responsive, modern single-page applications and interactive corporate sites.",
        tags: ["React.js", "Next.js", "Node.js", "Tailwind"]
    },
    {
        category: "Apps",
        icon: <FaMobileAlt />,
        title: "App Development",
        description: "Cross-platform mobile application development for iOS and Android.",
        tags: ["React Native", "Flutter", "Mobile UI"]
    },
    {
        category: "Other",
        icon: <FaCode />,
        title: "General Programming",
        description: "Python, C, C++, Embedded C, MATLAB, Java, C#, JavaScript, HTML, CSS.",
        tags: ["Python", "C++", "Java", "C#"]
    },
    {
        category: "Other",
        icon: <FaTools />,
        title: "Tools & Platforms",
        description: "Git, Docker, CI/CD, Bash, AWS, GCP, Tailscale, Cisco Packet Tracer.",
        tags: ["Docker", "AWS", "GCP", "Linux"]
    },
    {
        category: "Other",
        icon: <FaProjectDiagram />,
        title: "Strategy & Management",
        description: "Deep-tech technology transfer, partner discovery, and NIDHI-iTBI grant strategy.",
        tags: ["Agile", "Research", "Grants"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.5, rotateY: 30 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        rotateY: 0,
        transition: { type: "spring", stiffness: 120, damping: 10 }
    },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }
};

const Skills = () => {
    const [filter, setFilter] = useState('All');

    const filteredSkills = skillsData.filter(skill => {
        if (filter === 'All') return true;
        if (skill.category === filter) return true;
        return false;
    });

    const filterTabs = ['All', 'AI', 'Embedded', 'Apps', 'Web Apps', 'Other'];

    return (
        <section id="skills" className="section">
            <div className="container">

                <motion.div 
                    className="filter-tabs"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                >
                    {filterTabs.map(tab => (
                        <button 
                            key={tab}
                            className={`filter-btn ${filter === tab ? 'active' : ''}`}
                            onClick={() => setFilter(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </motion.div>

                <motion.div 
                    layout 
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill, idx) => (
                            <motion.div 
                                key={skill.title}
                                layout
                                variants={cardVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                custom={idx}
                                style={{ height: '100%' }}
                            >
                                <motion.div
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ 
                                        duration: 3, 
                                        repeat: Infinity, 
                                        ease: "easeInOut",
                                        delay: idx * 0.15 
                                    }}
                                    style={{ height: '100%' }}
                                >
                                    <Tilt
                                        className="tilt-container"
                                        tiltMaxAngleX={20} 
                                        tiltMaxAngleY={20} 
                                        perspective={1000} 
                                        transitionSpeed={1000} 
                                        scale={1.1}
                                        glareEnable={true}
                                        glareMaxOpacity={0.4}
                                        glareColor="var(--accent-purple)"
                                        glarePosition="all"
                                        style={{ height: '100%' }}
                                    >
                                        <div className="skill-category glass-card super-glow">
                                            <div className="skill-icon">{skill.icon}</div>
                                            <h3>{skill.title}</h3>
                                            <p>{skill.description}</p>
                                            <div className="tags">
                                                {skill.tags.map((tag, i) => (
                                                    <span key={i}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </Tilt>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
