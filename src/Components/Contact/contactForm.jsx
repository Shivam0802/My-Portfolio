import React from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import './contact.css';

const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been submitted successfully.");
    }

    return (
        <div className="contact-content">
            <div className="contact-body-left">
                <div className="contact-body-header">
                    <hr />
                    <h2>Contact Information</h2>
                    <hr />
                </div>
                <div className="contact-info">
                    <div className="contact-icon">
                        <MdEmail size='25px' style={{ color: 'tomato' }} />
                    </div>
                    <div className="contact-text">
                        <h3>Email:</h3>
                        <p>shivamk08001@gmail.com</p>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-icon">
                        <MdPhoneAndroid size='25px' style={{ color: 'moccasin' }} />
                    </div>
                    <div className="contact-text">
                        <h3>Phone:</h3>
                        <p>+91 1234567890</p>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-icon">
                        <TiLocation size='25px' style={{ color: 'mediumvioletred' }} />
                    </div>
                    <div className="contact-text">
                        <h3>Address:</h3>
                        <p>123, XYZ Street, ABC City, PQR State, 123456</p>
                    </div>
                </div>
                <div className="contact-social">
                    <Link to='https://github.com/Shivam0802' target="_blank"><FaGithubAlt size='40px' style={{ color: 'whitesmoke', margin: '30px' }} /></Link>
                    <Link to='https://www.linkedin.com/in/shivam-b53a201b8' target="_blank"><BsLinkedin size='33px' style={{ color: 'steelblue' }} /></Link>
                    <Link to='https://www.instagram.com/shivam_rai_802/?hl=en' target="_blank"><RiInstagramFill size='40px' style={{ color: 'salmon',margin: '30px', marginLeft: '0px' }} /></Link>
                    <Link to='https://twitter.com/Shivam_01_02' target="_blank"><FaTwitter size='35px' style={{ color: 'lightskyblue', margin: '30px', marginLeft: '0px' }} /></Link>
                </div>
            </div>
            <div className="contact-body-right">
                <form className="form-wrapper">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Name" />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email" />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Your Message...."></textarea>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;