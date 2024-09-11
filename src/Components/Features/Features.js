import React from 'react';
import './FeaturesSection.css';

const FeatureSection = () => {
    return (
        <div className="container-fluid text-center feature-section-container">
            <h2 className="feature-section-title">Fund For Bharat is where the Future works</h2>
            <p className="feature-section-description">
                Every day, we refine, iterate and explore how to make work better for everyone. Join us in<br/> creating a better future of work that’s more connected, inclusive, and flexible.
            </p>
            <div className="row">
                <div className="col-md-4">
                    <div className="feature-item">
                        <span className="icon icon-connected"></span>
                        <h4>Connected</h4>
                        <p>
                            We come together wherever we are – across time zones, regions, offices, and screens.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-item">
                        <span className="icon icon-inclusive"></span>
                        <h4>Inclusive</h4>
                        <p>
                            Our teams reflect the rich diversity of our world, with equitable access to opportunity for everyone.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-item">
                        <span className="icon icon-flexible"></span>
                        <h4>Flexible</h4>
                        <p>
                            We believe in your freedom to work when and how you work best, to help us all thrive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
