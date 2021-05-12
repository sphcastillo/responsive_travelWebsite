import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTypo3 } from 'react-icons/fa';





function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL
                        <FaTypo3 />

                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
