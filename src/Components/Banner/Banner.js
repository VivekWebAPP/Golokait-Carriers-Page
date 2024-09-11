import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';
import babyImage from '../../asscets/bg-box.png';

function Banner() {
    return (
        <div className="banner">
            <div className="banner-container">
                <div className="banner-text">
                    <img src={babyImage} alt="Baby" className="banner-img" />
                    Be the reason someone smiles today.{" "}
                    <a href="#" className="banner-link">
                        Donate now!
                    </a>
                </div>
                <button className="banner-button">Donate Monthly</button>
            </div>
        </div>
    );
}

export default Banner;
