import React from 'react';
import './CoreValues.css';
import image from '../../asscets/core-values-B1sn3_xf.png';

const CoreValues = () => {
  return (
    <div className="core-values-section">
      <div className="core-values-container container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-section">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="mb-5">
              These are some of the values that we live by as a company. We work by them, too.
              We’re building a platform and products that we believe in, knowing that there is real
              value to be gained from helping people to simplify whatever it is that they do and
              bring more of themselves to their work, wherever they are.
            </p>
            <div className="row">
              <div className="col-6">
                <ul className="core-values-list">
                  <li><span className="icon-heart"></span> Empathy</li>
                  <li><span className="icon-flower"></span> Thriving</li>
                  <li><span className="icon-smile"></span> Playfulness</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="core-values-list">
                  <li><span className="icon-courtesy"></span> Courtesy</li>
                  <li><span className="icon-hammer"></span> Craftsmanship</li>
                  <li><span className="icon-hands"></span> Solidarity</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 image-section">
            <img src={image} alt="Core Values Illustration" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
