import React from "react";
import { PiCirclesThreeDuotone } from "react-icons/pi";
import "./education.css";

const Education = () => {
    return (
        <div className="education-container">
            <div className="education-header">
                <hr />
                <h1>My Education</h1>
                <hr />
            </div>
            <div className="education-content">
                <div className="education-item">
                    <div className="education-item-left">
                        <PiCirclesThreeDuotone size="40px" style={{ color: 'teal', paddingTop: '12px' }} />
                        <hr />
                        <PiCirclesThreeDuotone className="Rotate" size="40px" style={{ color: 'teal', paddingTop: '12px' }} />
                    </div>
                    <div className="education-item-right">
                        <p><h2>Jagan Institute of Management Studies, Indraprastha University</h2>
                            <h4> Institutional Area, Sector - 5, Rohini, Delhi - 85</h4></p>
                        <p><span style={{ fontSize: '22px', fontWeight: '600', color: 'lightsalmon' }}>Master in Computer Application</span><br />
                            Graduated: Currently enrolled</p>
                    </div>
                </div>
                <div className="education-item">
                    <div className="education-item-left">
                        <PiCirclesThreeDuotone size="40px" style={{ color: 'teal', paddingTop: '12px' }} />
                        <hr />
                        <PiCirclesThreeDuotone className="Rotate" size="40px" style={{ color: 'teal', paddingTop: '12px' }} />
                    </div>
                    <div className="education-item-right">
                        <p><h2>Motilal Nehru College, University of Delhi</h2>
                            <h4>Benito Juarez Marg, New Delhi - 21</h4></p>
                        <p><span style={{ fontSize: '22px', fontWeight: '600', color: 'lightsalmon' }}>B.Sc.  in Physics</span><br />
                            Graduated: July 2021</p>
                    </div>
                </div>
                <div className="education-item">
                    <div className="education-item-left">
                        <PiCirclesThreeDuotone size="40px" style={{ color: 'teal', paddingTop: '12px' }} />
                        <hr />
                        <PiCirclesThreeDuotone className="Rotate" size="40px" style={{ color: 'teal', paddingTop: '12px' }} />
                    </div>
                    <div className="education-item-right">
                        <p><h2>St. Mary Senior Secondary School</h2>
                            <h4>Ambika Vihar, New Delhi - 87</h4></p>
                        <p><span style={{ fontSize: '22px', fontWeight: '600', color: 'lightsalmon' }}>12th Standarad</span><br />
                            Completed: March 2018</p>
                    </div>
                </div>
                <div className="education-item">
                    <div className="education-item-left">
                        <PiCirclesThreeDuotone size="40px" style={{ color: 'teal', paddingTop: '12px' }} />
                        <hr />
                        <PiCirclesThreeDuotone className="Rotate" size="40px" style={{ color: 'teal', paddingTop: '12px' }} />
                    </div>
                    <div className="education-item-right">
                        <p><h2>Rajendra Public School</h2>
                            <h4>50 Feet Raviwar Road, Nihal Vihar, Nangloi, Delhi - 41</h4></p>
                        <p><span style={{ fontSize: '22px', fontWeight: '600', color: 'lightsalmon' }}>10th Standarad</span><br />
                            Completed: March 2016</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;