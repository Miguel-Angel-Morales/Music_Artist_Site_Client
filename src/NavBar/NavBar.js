// Navbar.js
import React from 'react';
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/music">Music</Link>
                </li>
                <li>
                    <Link to="/merch">Merch</Link>
                </li>
                <li>
                    <Link to="/tour">Tour</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
