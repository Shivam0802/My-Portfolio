import React from "react";
import { Link } from "react-router-dom";
import { GiHand } from "react-icons/gi";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import MyProject from "./myproject";
import Contact from "../Contact/contact";
import Education from "../Education/education";
import Skills from "../Skills/skill";

import "./home.css";

const Home = () => {
    return (
        <>
        <div className="home-container">
            <div className="home-left">
                <h2 className="greet">
                    Hi, there.
                    <GiHand style={{ marginLeft: '20px', color: 'bisque', fontSize: '40px' }} />
                </h2>
                <div className="name tenali-ramakrishna-regular">
                    <h1>I'm</h1>
                    <h1 id="Shivam">Shivam</h1>
                </div>
                <h2 className='desc'>A Web Developer</h2>
                <p className="description tenali-ramakrishna-regular">
                    I am a web developer with experience in building websites and web applications. I specialize in JavaScript and have experience working with MERN stack.
                </p>
                <div className="home-bottom">
                    <Link to='https://github.com/Shivam0802' target="_blank"><FaGithubAlt className="github" style={{ fontSize: '40px', color: 'thistle',marginLeft: '20px' }} /></Link>
                    <Link to='https://www.linkedin.com/in/shivam-b53a201b8' target="_blank"><FaLinkedin className="Linkedin" style={{ fontSize: '40px', color: 'steelblue', marginLeft: '30px' }} /></Link>
                    <Link to='https://www.instagram.com/shivam_rai_802/?hl=en' target="_blank"><RiInstagramFill className="Instagram" style={{ fontSize: '40px', color: 'salmon', marginLeft: '30px' }} /></Link>
                    <Link to='https://twitter.com/Shivam_01_02' target="_blank"><FaTwitter className="Twitter" style={{ fontSize: '40px', color: 'lightskyblue', marginLeft: '30px' }} /></Link>
                </div>
            </div>
            <div className="home-right">
                <img src="/Right.png" alt="image" />
            </div>
        </div>
        <Education />
        <Skills />
        <MyProject />
        <Contact />
        </>
    );
};

export default Home;