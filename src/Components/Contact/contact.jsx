import React from "react";
import ContactForm from "./contactForm";
import './contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <hr />
                <h1>Contact</h1>
                <hr />
            </div>
            <div className="contact-body">
                <p>Feel free to contact me for any queries or suggestions. I will be happy to help you.</p>
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;