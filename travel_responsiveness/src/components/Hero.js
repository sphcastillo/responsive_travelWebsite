import React from 'react';
import { Button } from './Button';
import './Hero.css';
import '../App.css';
import { AiFillPlayCircle } from "react-icons/ai";
import video from "../videos/video-2.mp4";

function Hero() {
    return (
        <div className="container">
            <video src={video} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button 
                    className="btns" 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                GET STARTED
                </Button>
                <Button 
                    className="btns" 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                WATCH TRAILER
                    <AiFillPlayCircle style={{marginLeft: "4px"}}/>
                </Button>
            </div>
        </div>
    )
}

export default Hero;
