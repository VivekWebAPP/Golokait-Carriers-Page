import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
            <div className="container-fluid px-5">
                <a className="navbar-brand navbar-brand-custom" href="#">
                    LOGO
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Browse Fundraisers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Fundraise For
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                How it works?
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Pricing
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-outline-primary me-2 custom-button">
                            Start a Fundraiser
                        </button>
                        <button className="btn btn-outline-secondary me-2 custom-button">
                            Sign In
                        </button>
                        <button className="btn btn-success custom-button">Help Sumit</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
