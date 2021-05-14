import React from 'react';
import Hero from "../components/Hero";
import "../App.css";
import Cards from '../components/Cards';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Hero />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;
