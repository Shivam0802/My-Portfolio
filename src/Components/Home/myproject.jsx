import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const MyProject = () => {
    return (
        <div className="project-container">
            <div className="project-heading">
                <hr />
                <h1>My Projects</h1>
                <hr />
            </div>
            <div className="project-body">
                <div className="card">
                    <div className="image-box">
                        <img src="/E-waste.png" alt="project1" />
                    </div>
                    <div className="content">
                        <h3>Scrapster : <br />E-waste Management System</h3>
                        <hr />
                        <p>
                            Scrapster is a web application that helps in managing e-waste. It is built using MERN stack. Users can register, login, add e-waste items, and request a pickup. Admin can manage users, items, and pickups.
                        </p>
                        <h5><Link to='/projects'>Know more</Link></h5>
                    </div>
                </div>
                <div className="card" style={{marginLeft:'20px'}}>
                    <div className="image-box">
                        <img src="/to-do.png" alt="project2" style={{height:'300px'}} />
                    </div>
                    <div className="content">
                        <h3>To-Do List</h3>
                        <hr />
                        <p>
                            A simple to-do list web application built using React. Users can add tasks and delete them.
                        </p>
                        <h5><Link to='/projects'>Know more</Link></h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProject;