import React from "react";
import { MdEmail } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFaceGrinWide } from "react-icons/fa6";
import { SiPolkadot } from "react-icons/si";
import "./about.css";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <hr />
                <h1>About Me</h1>
                <hr />
            </div>
            <div className="about-content">
                <div className="personal-information">
                    <div className="personal-info">
                        <div className="personal-info-header">
                            <SiPolkadot style={{ margin: '10px', color: 'peru', fontSize: '22px' }} />
                            <h2>Personal Details</h2>
                            <hr />
                        </div>
                        <div className="personal-info-content">
                            <p>
                                <div className="info-content">
                                    <BsPersonFill style={{ margin: '15px', color: 'whitesmoke', fontSize: '20px' }} />
                                    <span className="highlight">Name<span style={{ marginLeft: '43px' }}>:</span></span><span style={{ marginLeft: '20px' }}>Shivam</span>
                                    <br />
                                </div>
                                <div className="info-content">
                                    <FaFaceGrinWide style={{ margin: '15px', color: 'darkseagreen', fontSize: '20px' }} />
                                    <span className="highlight">Age<span style={{ marginLeft: '59px' }}>:</span></span><span style={{ marginLeft: '20px' }}>21</span>
                                    <br />
                                </div>
                                <div className="info-content">
                                    <TiLocation style={{ margin: '15px', color: 'lightcoral', fontSize: '20px' }} />
                                    <span className="highlight">Location<span style={{ marginLeft: '18px' }}>:</span></span><span style={{ marginLeft: '20px' }}>India</span>
                                    <br />
                                </div>
                                <div className="info-content">
                                    <BiSolidPhoneCall style={{ margin: '15px', color: 'lightsalmon', fontSize: '20px' }} />
                                    <span className="highlight">Contact<span style={{ marginLeft: '22px' }}>:</span></span><span style={{ marginLeft: '20px' }}>9354141450</span>
                                    <br />
                                </div>
                                <div className="info-content">
                                    <MdEmail style={{ margin: '15px', color: 'darkturquoise', fontSize: '20px' }} />
                                    <span className="highlight">Email<span style={{ marginLeft: '40px' }}>:</span></span><span style={{ marginLeft: '20px' }}>shivamk08001@gmail.com</span>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="person-image">
                        <img src="/myimage.jpg" alt="myimage" />
                    </div>
                </div>
                <div className="personal-summary">
                    <div className="personal-summary-header">
                        <SiPolkadot style={{ margin: '10px', color: 'peru', fontSize: '22px' }} />
                        <h2>Personal Summary</h2>
                        <hr />
                    </div>
                    <div className="personal-summary-content">
                        <p>
                            I am a web developer with a passion for creating and building websites. I am a
                            self-taught developer having knowledge of MERN technologies. I have experience in
                            developing web applications. I am always eager to learn new
                            technologies and improve my skills. I am a quick learner and a team player who is
                            always ready to take on new challenges. I am looking for an opportunity to work in a
                            challenging environment where I can utilize my skills and knowledge to grow as a
                            professional. I am a creative thinker who is always looking for
                            new ways to solve problems and improve existing solutions. I am a responsible and reliable
                            individual who is always ready to take on new challenges and deliver high-quality
                            work. I am a detail-oriented person who pays attention to the smallest details and always strives for perfection.
                            I am a team player who is
                            always ready to collaborate with others to achieve common goals.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-footer">
                <div className='footer-content'>
                    <div className='footer-header'>
                        <SiPolkadot style={{ margin: '10px', color: 'peru', fontSize: '22px' }} />
                        <h1>What I do!</h1>
                        <hr />
                    </div>
                </div>
                <div className='footer-image'>
                    <div className='footer-image-left'>
                        <div className='footer-image-header'>
                            <hr />
                            <h2>UI/UX Design</h2>
                            <hr />
                        </div>
                        <p>
                            I design user-friendly interfaces that are visually appealing and easy to navigate.
                            My designs are responsive and accessible across all devices and platforms.
                            I focus on user experience and usability to create engaging and interactive designs.
                        </p>
                    </div>
                    <div className='footer-image-middle'>
                        <div className='footer-image-header'>
                            <hr />
                            <h2>Frontend</h2>
                            <hr />
                        </div>
                        <p>
                            I develop frontend applications using modern web technologies.
                            I create responsive and interactive user interfaces that are visually appealing and easy to use.
                            I focus on performance and optimization to deliver fast and efficient applications.
                        </p>
                    </div>
                    <div className='footer-image-right'>
                        <div className='footer-image-header'>
                            <hr />
                            <h2>Backend</h2>
                            <hr />
                        </div>
                        <p>
                            I develop backend applications using modern web technologies.
                            I create scalable and efficient server-side applications that handle complex business logic.
                            I focus on security and performance to deliver reliable and secure applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;