import React from 'react';
import './SuccessMessage.css';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SuccessMessage = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/');
    };

    return (
        <div className="success-container">
            <div className="success-icon">
                <FaCheckCircle />
            </div>
            <h1>Registration Successful!</h1>
            <p>Thank you for registering for the position. We will get in touch with you soon.</p>
            <button className="go-back-button" onClick={handleOnClick}>
                Go Back
            </button>
        </div>
    );
};

export default SuccessMessage;
