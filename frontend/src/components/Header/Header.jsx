import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-left">
                    <a href="/" className="logo">
                        <img
                            src="https://cdn.mentorcruise.com/img/mc-logo.svg"
                            alt="MentorCruise"
                            className="logo-img"
                        />
                        <span className="site-name">Mentorship</span>
                    </a>
                </div>
                <nav className="nav-links">
                    <a href="/about-us" className="nav-item">Our Mentors</a>
                    <a href="/contact-us" className="nav-item">Contact Us</a>
                    <a href="/our-mentors" className="nav-item">About us</a>
                    <a href="/login" className="login-btn">Login</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
