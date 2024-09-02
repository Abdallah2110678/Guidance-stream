import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './about-us.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <Header />
            <main className="about-main">
                <section className="about-info">
                    <h1>About Us</h1>
                    <p>We are committed to helping individuals achieve their goals through personalized mentorship. Our platform connects you with experts in various fields to guide you on your journey to success.</p>
                </section>
                <section className="team-section">
                    <h2>Our Team</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img src="./../../../public/images/team1.jpg" alt="Team Member 1" />
                            <h3>John Doe</h3>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="team-member">
                            <img src="./../../../public/images/team2.jpg" alt="Team Member 2" />
                            <h3>Jane Smith</h3>
                            <p>Chief Product Officer</p>
                        </div>
                        <div className="team-member">
                            <img src="./../../../public/images/team3.jpg" alt="Team Member 3" />
                            <h3>Mike Johnson</h3>
                            <p>Head of Marketing</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;
