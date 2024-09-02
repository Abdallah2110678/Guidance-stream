import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <main className="home-main">
                <section className="hero-section">
                    <div className="hero-text">
                        <h1>Welcome to the Mentorship Web App</h1>
                        <p>Your journey to success starts here.</p>
                        <button className="cta-button">Get Started</button>
                    </div>
                    <div className="hero-image">
                        <img className='image' src="./../../../public/images/homebg.jpg" alt="Mentorship" />
                    </div>
                </section>
                <section className="info-section">
                    <h2>Find a Mentor</h2>
                    <p>Book appointments with experts in various fields to guide you on the right path.</p>
                </section>
                <div className="sections-container">
                    <section className="section">
                        <h2>Founders</h2>
                        <p>Description about the founders.</p>
                    </section>
                    <section className="section">
                        <h2>Product</h2>
                        <p>Description about the product.</p>
                    </section>
                    <section className="section">
                        <h2>Marketing people</h2>
                        <p>Description about the marketing team.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
