import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./Header.css";

const navLinks = [
    {
        display: "Home",
        url: "/",
    },
    {
        display: "Our Mentors",
        url: "#",
    },

    {
        display: "Contact Us",
        url: "/contact-us",
    },
    {
        display: "About Us",
        url: "about-us",
    },
    {
        display: "Login",
        url: "login",
        className: "login__link",
    },
];

const Header = () => {
    const menuRef = useRef();

    const menuToggle = () => menuRef.current.classList.toggle("active__menu");

    return (
        <header className="header">
            <Container>
                <div className="navigation d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h2 className=" d-flex align-items-center gap-1">
                            <i className="ri-pantone-line"></i> TariQi
                        </h2>
                    </div>

                    <div className="nav d-flex align-items-center gap-5">
                        <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                            <ul className="nav__list">
                                {navLinks.map((item, index) => (
                                    <li key={index} className="nav__item">
                                        <a href={item.url} className={item.className}>{item.display}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mobile__menu">
                        <span>
                            <i className="ri-menu-line" onClick={menuToggle}></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
