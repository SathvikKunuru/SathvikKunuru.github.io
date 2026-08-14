"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMicrochip, FaBrain, FaCode, FaTools, FaLaptopCode, FaProjectDiagram, FaMobileAlt } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import './Skills.css';

export const skillsData = [
    {
        category: "AI",
        tags: [
            "YOLO",
            "CNNs",
            "PyTorch",
            "Transformers",
            "RAG",
            "Face Recognition",
            "Edge AI",
            "SCRFD",
            "Jetson Nano",
            "LLM",
            "Llama 7B",
            "Hugging Face",
            "LLaMA / LLaMA 2",
            "NLP (Natural Language Processing)",
            "Fine-tuning",
            "Instruction Tuning",
            "AutoTrain Advanced",
            "Hinglish / Translation",
            "OpenCV",
            "Computer Vision",
            "Spoof Detection / Liveness Detection",
            "Face Attendance",
            "Deep learning",
            "Deep Reinforcement Learning",
            "Prompt Engineering",
            "Generative AI",
            "Facial Recognition",
            "Convolutional Neural Networks (CNN)",
            "Dlib",
            "Pandas (Software)",
            "TensorFlow",
            "Machine Learning",
            "XGBoost",
            "Real-Time Inference",
            "Large Language Models",
            "Agentic AI Pipelines",
            "Multi-Agent Architecture",
            "Sequential Pipelines",
            "Parallel Execution",
            "Conditional Workflows",
            "Feedback Loops",
            "Context Management",
            "Holographic Memory",
            "Pipeline Resilience",
            "Model Drift Prevention",
            "Self-Improving Pipelines",
            "Toolchain Integration",
            "Idempotent Operations",
            "Batch Processing",
            "Monitoring",
            "Observability",
            "Orchestration Patterns",
            "Hermes AI",
            "openclaw",
            "ollama",
            "vllm"
        ]
    },
    {
        category: "Web Apps",
        tags: [
            "Next.js",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Postgres",
            "Tailwind CSS",
            "Web Development",
            "Hackathon",
            "HTML",
            "CSS",
            "GUI / Desktop Applications",
            "Bootstrap (Framework)",
            "Visual Web Developer",
            "Web Application Development",
            "Web Projects",
            "Back-End Web Development",
            "HTML Scripting",
            "Front-End Development",
            "firebase",
            "firestore DB",
            "realtime db",
            "web development",
            "google auth",
            "influx db",
            "rest api",
            "Tailscale"
        ]
    },
    {
        category: "Apps",
        tags: [
            "C++",
            "Python",
            "JavaScript",
            "Bash",
            "CMake",
            "Git",
            "Docker",
            "CI/CD",
            "Postman",
            "C",
            "venv (Virtual Environments)",
            "Zephyr OS",
            "Qt / Qt Libraries",
            "Ubuntu",
            "JetBrains Rider",
            "Object-Oriented Programming (OOP)",
            "Linux",
            "GitHub",
            "SSH tunneling",
            "n8n"
        ]
    },
    {
        category: "Other",
        tags: [
            "Networking",
            "Tech Transfer",
            "Strategy",
            "Innovation",
            "Grant",
            "Startup",
            "Accessibility / Assistive Technology",
            "header files",
            "Problem Solving",
            "Renewable Resources",
            "Nanotechnology",
            "English",
            "Design Patents",
            "Explosives Engineering",
            "IT Project Implementation",
            "Hacking",
            "Skill Development",
            "Telugu",
            "Lifelong Learning",
            "Hindi",
            "College Counseling",
            "Presentations",
            "Computer Literacy",
            "Presentation Preparation",
            "Learning Styles",
            "Entrepreneurship Education",
            "Analytical Skills",
            "Business Development",
            "PCB Design",
            "Altium",
            "KiCad",
            "3D Printing",
            "Robotics",
            "Biomedical",
            "Agri",
            "Agriculture"
        ]
    },
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
