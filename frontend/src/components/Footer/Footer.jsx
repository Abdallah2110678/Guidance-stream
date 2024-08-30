import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    <a href="/" className="footer-logo-link">
                        <img src="https://cdn.mentorcruise.com/img/mc-logo.svg" alt="MentorCruise Logo" className="footer-logo-img" />
                    </a>
                </div>
                <p className="footer-description">
                    Your trusted source to find highly-vetted mentors & industry professionals to move your career ahead.
                </p>
                <div className="social-links">
                    <a href="https://facebook.com/mentorcruise/" title="MentorCruise Facebook" target="_blank" rel="noreferrer" className="social-link">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/mentorcruise/" title="MentorCruise Instagram" target="_blank" rel="noreferrer" className="social-link">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a.975.975 0 01-.646.644 1.071 1.071 0 01-.784.047.972.972 0 01-.646-.647.973.973 0 01.047-.785.975.975 0 01.647-.646 1.07 1.07 0 01.784-.047.975.975 0 01.646.646.973.973 0 01.047.785z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="https://twitter.com/mentorcruise" title="MentorCruise Twitter" target="_blank" rel="noreferrer" className="social-link">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22.46 6.009a8.406 8.406 0 01-2.357.646 4.248 4.248 0 001.865-2.347 8.369 8.369 0 01-2.605.993A4.206 4.206 0 0015.726 4c-2.331 0-4.226 1.89-4.226 4.224 0 .331.037.655.095.966A11.988 11.988 0 013 6.093a4.226 4.226 0 001.306 5.64A4.165 4.165 0 012.4 11v.053a4.225 4.225 0 003.387 4.137 4.134 4.134 0 01-1.899.072c.54 1.68 2.11 2.9 3.971 2.93A8.439 8.439 0 011 18.855a11.976 11.976 0 006.293 1.83c7.558 0 11.694-6.217 11.694-11.616 0-.177-.004-.354-.01-.53A8.331 8.331 0 0022.46 6.01z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h3 className="footer-heading">Company</h3>
                        <a href="/about" className="footer-link">About Us</a>
                        <a href="/Our-Mentors" className="footer-link">Our Mentors</a>
                        <a href="/contact" className="footer-link">Contact</a>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-heading">Support</h3>
                        <a href="/help" className="footer-link">Help Center</a>
                        <a href="/terms" className="footer-link">Terms of Service</a>
                        <a href="/privacy" className="footer-link">Privacy Policy</a>
                        <a href="/faqs" className="footer-link">FAQs</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-bottom-text">
                        &copy; {new Date().getFullYear()} MentorCruise. All rights reserved. Built with <a href="https://www.reactjs.org/" className="footer-bottom-link">React</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
