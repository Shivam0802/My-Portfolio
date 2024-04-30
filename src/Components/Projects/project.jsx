import React from "react";
import Carousal from './Crousal';
import { FaGithubAlt } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import "./project.css";
import { Link } from "react-router-dom";

const Project = () => {

    return (
        <div className="project-container">
            <div className="project-header">
                <hr />
                <h1>Projects</h1>
                <hr />
            </div>
            <div className="project-content">
                <div className="project-first-card">
                    <div className="project-card-head">
                        <div className="heading">
                            <FaHandPointRight size='30px' style={{ color: 'rosybrown', paddingRight: '20px' }} />
                            <h2>Scrapster : (E-waste management system)</h2>
                        </div>
                        <div className="project-links">
                            <Link to='https://github.com/Shivam0802/Scrapster' target="_blank">
                                Scapster<FaGithubAlt size='40px' style={{ color: 'rosybrown', paddingRight: '50px', paddingLeft: '10px' }} />
                            </Link>
                        </div>
                    </div>
                    <div className="project-card-body">
                        <p>
                            Scrapster is a web application that helps in managing the e-waste
                            generated in the city. It is a platform where the user can direclty
                            sell their e-waste to the recycler. The recycler can also register
                            themselves on the platform and can buy the e-waste from the user.
                        </p>
                    </div>
                    <Carousal />
                </div>
                <div className="project-second-card">
                    <div className="project-card-head">
                        <div className="heading">
                            <FaHandPointRight size='30px' style={{ color: 'rosybrown', paddingRight: '20px' }} />
                            <h2>To-Do List</h2>
                        </div>
                        <div className="project-links">
                            <Link to='https://github.com/Shivam0802/To-do-List' target="_blank">
                                To-Do List<FaGithubAlt size='40px' style={{ color: 'rosybrown', paddingRight: '50px', paddingLeft: '10px' }} />
                            </Link>
                        </div>
                    </div>
                    <div className="project-card-body">
                        <p>
                            A simple To-Do List web application that helps in managing the daily tasks.
                            The user can add the tasks and delete them.
                            I use React JS for the frontend and material UI.
                        </p>
                    </div>
                    <div className="project-image">
                        <div className="project-image-container">
                            <img src="/to-do.png" alt="project" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;