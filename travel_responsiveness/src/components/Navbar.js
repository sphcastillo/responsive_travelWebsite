import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTypo3, FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';





function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL
                        <FaTypo3 />
                    </Link>
                    <div className='menu-icon' onClick={handleClick} >
                        {click ? <IoMdClose /> : <FaBars /> }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
