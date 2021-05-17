import React from 'react';
import { Button } from './Button';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import './Footer.css';
import {FaTypo3,
        FaFacebookF,
        FaLinkedin,
        FaInstagram,
        FaYoutube,
        FaTwitter
} from 'react-icons/fa';
=======
import './Footer.css';
>>>>>>> 25e166f3672436c2820a8c792f245831f7978a96

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            type = "email"
                            name = "email"
                            placeholder = "Your E-mail"
                            className = 'footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'> 
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'> 
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'> 
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'> 
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>

                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>
                            TRVL
                            <FaTypo3 />
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL @ 2020</small>

                    <div className='social-icons'>
                        <Link
                            className="social-icon-link facebook"
                            to='/'
                            target = '_blank'
                            aria-label='Facebook'
                        >
                        </Link>
                            <FaFacebookF style={{color: "white", marginBottom: "6px"}}/>
                        <Link
                            className="social-icon-link instagram"
                            to='/'
                            target = '_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            className="social-icon-link youtube"
                            to='/'
                            target = '_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </Link>
                        <Link
                            className="social-icon-link twitter"
                            to='/'
                            target = '_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            className="social-icon-link linkedin"
                            to='/'
                            target = '_blank'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
