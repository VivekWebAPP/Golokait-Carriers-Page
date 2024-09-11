import React from 'react';
import './WorkingAndThriving.css';
import image from '../../asscets/career-bG6eieN6.png';
import checkIcon from '../../asscets/check-icon.png'; 

const WorkingAndThriving = () => {
    return (
        <div className="wt-container">
            <div className="wt-row">
                <div className="wt-col-img">
                    <img src={image} alt="Working and Thriving Illustration" className="wt-img" />
                </div>
                <div className="wt-col-content">
                    <h2 className="wt-heading">Working and thriving</h2>
                    <p className="wt-paragraph">
                        As part of the global Salesforce family, we’re proud to offer benefits that help you to feel and do your best. Access a range of benefits, resources, and expert guidance to help you to prioritise your well-being, so you can thrive with a healthy body and mind.
                    </p>
                    <ul className="wt-benefits-list">
                        <li><img src={checkIcon} alt="Check Icon" className="wt-icon" /> Time off to rest, recharge and volunteer</li>
                        <li><img src={checkIcon} alt="Check Icon" className="wt-icon" /> Exceptional healthcare coverage</li>
                        <li><img src={checkIcon} alt="Check Icon" className="wt-icon" /> Holistic programmes for well-being, family planning and more</li>
                    </ul>
                    <a href="#learn-more" className="wt-learn-more">Learn more about benefits →</a>
                </div>
            </div>
        </div>
    );
};

export default WorkingAndThriving;
