import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './contact-us.css';

const ContactUs = () => {
    return (
        <div className="contact-container">
            <Header />
            <main className="contact-main">
                <section className="contact-info">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you! Fill out the form below, or reach us via the following contact details.</p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> support@mentorshipapp.com</p>
                        <p><strong>Phone:</strong> +123 456 7890</p>
                        <p><strong>Address:</strong> 1234 Mentorship Lane, Suite 100, City, Country</p>
                    </div>
                </section>
                <section className="contact-form">
                    <h2>Get in Touch</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ContactUs;
