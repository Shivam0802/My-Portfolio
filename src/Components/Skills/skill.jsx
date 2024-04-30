import React from "react";
import { SiPolkadot } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHandPointRight } from "react-icons/fa";
import "./skill.css";

const Skills = () => {
    return (
        <div className="skill-container">
            <div className="skill-header">
                <hr />
                <h1>My Skills</h1>
                <hr />
            </div>
            <div className="skill-content">
                <p>
                    I am a Full Stack Developer with a good knowledge of programming languages and web development.
                    I have experience in building websites using MERN stack.
                    I am proficient in front-end technologies like React, Bootstrap, Material-UI, and back-end technologies
                    like Node.js, Express.js, and MongoDB. I am also familiar with Python, Java, and C++.
                </p>
                <div className="skill-content-bottom">
                    <div className="skill-content-header">
                        <SiPolkadot style={{ marginRight: '10px', color: 'peru', fontSize: '22px' }} />
                        <h2>Skills</h2>
                        <hr />
                    </div>
                    <div className="skill-content-body">
                        <div className="programming">
                            <div className="programming-header">
                                <FaHandPointRight style={{ marginRight: '10px', color: 'slategrey', fontSize: '22px' }} />
                                <h3>Programming Languages:</h3>
                            </div>
                            <div className="programming-content">
                                <ul className="skill-list">
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>C++</li>
                                </ul>
                            </div>
                        </div>
                        <div className="frontend">
                            <div className="programming-header">
                                <FaHandPointRight style={{ marginRight: '10px', color: 'slategrey', fontSize: '22px' }} />
                                <h3>Front-end Technologies:</h3>
                            </div>
                            <div className="programming-content">
                                <ul className="skill-list">
                                    <li>React</li>
                                    <li>Bootstrap</li>
                                    <li>Material-UI</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                        </div>
                        <div className="backend">
                            <div className="programming-header">
                                <FaHandPointRight style={{ marginRight: '10px', color: 'slategrey', fontSize: '22px' }} />
                                <h3>Back-end Technologies:</h3>
                            </div>
                            <div className="programming-content">
                                <ul className="skill-list">
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;