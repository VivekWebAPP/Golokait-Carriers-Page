import React from 'react';
import './WelcomeSection.css'; 

const WelcomeSection = () => {
  return (
    <div className="welcome-container">
      <h1 className="title">Welcome to where the future works</h1>
      <div className="buttonContainer">
        <button className="getStartedButton">Get Started</button>
        <button className="talkToSalesButton">Talk to Sales</button>
      </div>
    </div>
  );
};

export default WelcomeSection;
