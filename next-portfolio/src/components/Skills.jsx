"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMicrochip, FaBrain, FaCode, FaTools, FaLaptopCode, FaProjectDiagram, FaMobileAlt } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import './Skills.css';

export const skillsData = [
    {
        category: "Embedded",
        icon: <FaMicrochip />,
        title: "Embedded & IoT",
        description: "STM32, Raspberry Pi, Jetson Nano, ARM Cortex, Zephyr RTOS, Linux, Bootloaders.",
        tags: ["I2C", "SPI", "UART", "CAN", "MQTT", "LoRa", "Microcontrollers", "Sensors", "IoT", "SCADA", "LiDAR", "IMU", "Optics", "Wearables", "Health", "PLC", "ST7540", "Communication", "STM32", "ESP", "Raspberry Pi", "DWM1000", "UWB", "RS-232", "Serial Port", "Ethernet", "LAN", "IBR117 Board", "Embedded Linux", "Device Tree", "Hardware Interface", "Embedded Devices", "PLC Programming", "Programmable Logic Controller (PLC)", "SIMATIC STEP 7", "PLC Ladder Logic", "Yocto Project", "TinyOS", "TinyML", "Microprocessors", "Arduino IDE", "Embedded C", "Electronics", "Electronic Circuits", "Hardware Design", "Hardware Hacking", "Electronics Technology", "Zephyr OS", "PCB Design", "Altium", "KiCad", "3D Printing", "Robotics", "Biomedical", "Agriculture", "Modbus", "Wi-Fi", "TCP/UDP", "ARM Cortex", "Bootloaders", "BitBake", "Poky", "Precision Agriculture", "USB Automation"]
    },
    {
        category: "AI",
        icon: <FaBrain />,
        title: "AI & Machine Learning",
        description: "Deep Learning, Neural Networks, LLMs, Edge Computing, Computer Vision.",
        tags: ["YOLO", "CNNs", "PyTorch", "Transformers", "RAG", "Face Recognition", "Edge AI", "SCRFD", "Jetson Nano", "LLM", "Llama 7B", "Hugging Face", "LLaMA", "LLaMA 2", "NLP", "Fine-tuning", "Instruction Tuning", "AutoTrain Advanced", "Hinglish", "OpenCV", "Computer Vision", "Spoof Detection", "Face Attendance", "Deep learning", "Deep Reinforcement Learning", "Prompt Engineering", "Generative AI", "Facial Recognition", "Convolutional Neural Networks (CNN)", "Dlib", "Pandas (Software)", "TensorFlow", "Machine Learning", "XGBoost", "Real-Time Inference", "Large Language Models", "Agentic AI Pipelines", "Multi-Agent Architecture", "Sequential Pipelines", "Parallel Execution", "Conditional Workflows", "Feedback Loops", "Context Management", "Holographic Memory", "Pipeline Resilience", "Model Drift Prevention", "Self-Improving Pipelines", "Toolchain Integration", "Idempotent Operations", "Batch Processing", "Monitoring & Observability", "Orchestration Patterns"]
    },
    {
        category: "Web Apps",
        icon: <FaLaptopCode />,
        title: "Web Development",
        description: "Building responsive, modern single-page applications and interactive corporate sites.",
        tags: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "Express", "MongoDB", "Postgres", "Web Development", "HTML", "CSS", "GUI", "Bootstrap (Framework)", "Visual Web Developer", "Web Application Development", "Web Projects", "Back-End Web Development", "HTML Scripting", "Front-End Development"]
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
        tags: ["Python", "C++", "C", "Java", "C#", "JavaScript", "Bash", "CMake", "Object-Oriented Programming (OOP)"]
    },
    {
        category: "Other",
        icon: <FaTools />,
        title: "Tools & Platforms",
        description: "Git, Docker, CI/CD, Bash, AWS, GCP, Tailscale, Cisco Packet Tracer.",
        tags: ["Docker", "AWS", "GCP", "Linux", "Git", "CI/CD", "Postman", "venv", "Qt", "Ubuntu", "JetBrains Rider", "GitHub", "SSH tunneling", "n8n"]
    },
    {
        category: "Other",
        icon: <FaProjectDiagram />,
        title: "Strategy & Management",
        description: "Deep-tech technology transfer, partner discovery, and NIDHI-iTBI grant strategy.",
        tags: ["Agile", "Research", "Grants", "Networking", "Tech Transfer", "Strategy", "Innovation", "Startup", "Accessibility", "Problem Solving", "Renewable Resources", "Nanotechnology", "English", "Design Patents", "Explosives Engineering", "IT Project Implementation", "Hacking", "Skill Development", "Telugu", "Lifelong Learning", "Hindi", "College Counseling", "Presentations", "Computer Literacy", "Presentation Preparation", "Learning Styles", "Entrepreneurship Education", "Analytical Skills", "Business Development"]
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
