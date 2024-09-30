import React from 'react';
import './Carrier.css';
import images from '../../asscets/img-hero-slack-careers.png';

function Careers() {
    return (
        <div className="careers-section">
            <div className="careers-content">
                <div className="section-header">CAREERS AT FUND FOR BHARAT</div>
                <div className="main-heading">Work with us</div>
                <div className="section-description">
                    Explore remote-friendly, flexible opportunities and join our mission to make work life simpler, more pleasant, and more productive.
                </div>
                <a href="#internShipsSection"><button className="custom-career-button">VIEW CAREERS</button></a>
                <a href="#internShipsSection" className="internship-link">Looking for internships?</a>
            </div>
            <div className="illustration-container">
                <div className="illustration">
                    <img src={images} alt="Illustration" className="illustration-img" />
                </div>
            </div>
        </div>
    );
}

export default Careers;
