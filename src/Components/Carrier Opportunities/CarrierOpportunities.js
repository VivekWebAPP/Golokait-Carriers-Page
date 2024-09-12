import React, { useState } from "react";
import "./CarrierOpportunities.css";
import { action } from '../../redux/index'; // Ensure this path is correct
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CarrierOpportunities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRegistration, setUserRegistration] = useState({
    name: '',
    email: '',
    resume: null,
  });
  const dispatch = useDispatch();
  const userRegistered = useSelector((state) => state.resumeRegestration);
  const userRegistrationEmail = useSelector((state)=>state.emailSend);
  const navigate = useNavigate();

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOnInput = (e) => {
    const { name, value, files } = e.target;
    setUserRegistration((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(action.UserRegest(userRegistration.name, userRegistration.email, userRegistration.resume));
    console.log(userRegistered);

    if (userRegistered && userRegistered.response) {
      console.log("User registered:", userRegistered);
      dispatch(action.sendEmailToUser(userRegistration.email,'Registration Successfull',`${userRegistration.name} you are successfull registrated for the job role our team will contact you soon`));
      console.log(userRegistrationEmail);
      navigate('/registered');
    }
  };

  return (
    <div className="carrier-opportunities-container dark-theme">
      <div className="carrier-banner">
        <h1>Career Opportunities</h1>
        <p>
          Explore our open roles for working totally remotely, from the office,
          or somewhere in between.
        </p>
      </div>

      <div className="filter-block">
        <label className="filter-label">Filter by</label>
        <div className="filter-options">
          <select className="filter-select">
            <option>All directions</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
          <select className="filter-select">
            <option>All locations</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
          <select className="filter-select">
            <option>All jobs</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
          <span className="positions-open">19 positions open</span>
        </div>
      </div>

      <div className="job-section">
        <div className="job-category">
          <button className="category-button">Customer Success</button>
        </div>
        <div className="job-entry">
          <div className="job-details">
            <div className="job-title">Customer Success Guide Associate</div>
            <div className="job-location">Ireland - Dublin</div>
            <div className="job-apply" onClick={handleApplyClick}>
              Apply->
            </div>
          </div>
        </div>
      </div>

      <div className="job-section">
        <div className="job-category">
          <button className="category-button">Data</button>
        </div>
        <div className="job-entry">
          <div className="job-details">
            <div className="job-title">Staff Data Scientist, Foundations</div>
            <div className="job-location">California - Remote</div>
            <div className="job-apply" onClick={handleApplyClick}>
              Apply->
            </div>
          </div>
        </div>
      </div>

      <div className="job-section">
        <div className="job-category">
          <button className="category-button">Program & Project Management</button>
        </div>
        <div className="job-entry">
          <div className="job-details">
            <div className="job-title">Senior Research Programs Lead</div>
            <div className="job-location">California - Remote</div>
            <div className="job-apply" onClick={handleApplyClick}>
              Apply->
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>Apply Here</h2>
            <form className="apply-form" onSubmit={handleOnSubmit}>
              <label>
                Name:
                <input type="text" name="name" required onChange={handleOnInput} />
              </label>
              <label>
                Email:
                <input type="email" name="email" required onChange={handleOnInput} />
              </label>
              <label>
                Phone Number:
                <input type="tel" name="phone" required />
              </label>
              <label>
                Upload Resume (PDF):
                <input type="file" name="resume" accept=".pdf" required onChange={handleOnInput} />
              </label>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarrierOpportunities;
