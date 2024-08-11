import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Vamshi Panaganti</h1>
            <p>Business Development Manager</p>
            <p>Hyderabad, India</p>
            <p>vamshi.panaganti@gmail.com | +91 8886554697</p>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#activities">Activities</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
