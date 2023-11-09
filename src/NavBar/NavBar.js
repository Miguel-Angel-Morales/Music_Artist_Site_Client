// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
}

export default Navbar;

/* 
import React from 'react';
import {link} from 'react-router-dom;'

const Navbar()=>
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/music">Music</Link>
                </li>
                <li>
                    <Link to="/merch">Merch</Link>
                </li>
                
                
            </ul>
        </nav>
    ) */