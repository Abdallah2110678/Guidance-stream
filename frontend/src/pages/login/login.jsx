import React from 'react';
import './login.css';
import InfoSection from './../../components/info/info';

const login = () => {
    return (
        <div className="login-page">
            <div className="login-form-section">
                <form className="login-form">
                    <h2>Login</h2>
                    <label>
                        Email:
                        <input type="email" required />
                    </label>
                    <label>
                        Password:
                        <input type="password" required />
                    </label>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className="info-section">
                <InfoSection />
            </div>
        </div>
    );
};

export default login;
