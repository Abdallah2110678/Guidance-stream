import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './home.css';

const home = () => {
    return (
        <div className="home-container">
            <Header />
            <main className="home-main">
                <section className="hero-section">
                    <h1>Welcome to the Mentorship Web App</h1>
                    <p>Your journey to success starts here.</p>
                    <button className="cta-button">Get Started</button>
                </section>
                <section className="info-section">
                    <h2>Find a Mentor</h2>
                    <p>Book appointments with experts in various fields to guide you on the right path.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default home;
