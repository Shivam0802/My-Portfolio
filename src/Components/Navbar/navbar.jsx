import React, {useState} from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { BsPersonBadgeFill } from "react-icons/bs";
import { PiBrainDuotone } from "react-icons/pi";
import { SiPolymerproject } from "react-icons/si";
import { FcGraduationCap } from "react-icons/fc";
import { PiPhoneCallDuotone } from "react-icons/pi";
import "./navbar.css";

const Navbar = () => {

    return (
        <div className="nav-container">
        <div className="logo">
            <img src="./Logo.png" alt="Logo" />
        </div>
            <nav>
                <ul className="list">
                    <li className="icon-label">
                        <IoHome style={{marginRight:'5px', color:'darkseagreen'}} />
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="icon-label">
                        <BsPersonBadgeFill style={{marginRight:'5px', color:'darksalmon'}} />
                        <Link to='/about'>About</Link>
                    </li>
                    <li className="icon-label">
                        <FcGraduationCap style={{marginRight:'5px',fontSize:'22px'}} />
                        <Link to='/education'>Education</Link>
                    </li>
                    <li className="icon-label">
                        <PiBrainDuotone style={{marginRight:'5px', color:'darkturquoise'}} />
                        <Link to='/skills'>Skills</Link>
                    </li>
                    <li className="icon-label">
                        <SiPolymerproject style={{marginRight:'5px', color:'darkorchid'}} />
                        <Link to='/projects'>Projects</Link>
                    </li>  
                    <li className="icon-label">
                        <PiPhoneCallDuotone style={{marginRight:'5px', color:'darkorange'}} />
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;