import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMicrochip, FaBrain, FaCode, FaTools, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';
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

const Skills = () => {
    const [filter, setFilter] = useState('All');

    const filteredSkills = skillsData.filter(skill => {
        if (filter === 'All') return true;
        if (skill.category === filter) return true;
        return false;
    });

    const filterTabs = ['All', 'AI', 'Embedded', 'Web Apps', 'Other'];

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div 
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2>Technical Arsenal</h2>
                    <div className="line"></div>
                </motion.div>

                <div className="filter-tabs">
                    {filterTabs.map(tab => (
                        <button 
                            key={tab}
                            className={`filter-btn ${filter === tab ? 'active' : ''}`}
                            onClick={() => setFilter(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <motion.div layout className="skills-grid">
                    <AnimatePresence>
                        {filteredSkills.map((skill) => (
                            <motion.div 
                                key={skill.title}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                style={{ height: '100%' }}
                            >
                                <Tilt
                                    className="tilt-container"
                                    tiltMaxAngleX={15} 
                                    tiltMaxAngleY={15} 
                                    perspective={1000} 
                                    transitionSpeed={1500} 
                                    scale={1.05}
                                    glareEnable={true}
                                    glareMaxOpacity={0.15}
                                    glareColor="white"
                                    glarePosition="all"
                                    style={{ height: '100%' }}
                                >
                                    <div className="skill-category glass-card">
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
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
