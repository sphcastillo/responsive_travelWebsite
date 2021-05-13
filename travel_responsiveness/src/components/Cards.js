import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Greece from "../images/greece.jpg";

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem 
                            src= {Greece}
                            text="Explore and fall in love with Greece"
                            label = "Greece"
                            path = '/services'
                        
                        />
                        <CardItem 
                            src= {Greece}
                            text="Explore and fall in love with Greece"
                            label = "Greece"
                            path = '/services'
                        
                        />
                        <CardItem 
                            src= {Greece}
                            text="Explore and fall in love with Greece"
                            label = "Greece"
                            path = '/services'
                        
                        />
                        <CardItem 
                            src= {Greece}
                            text="Explore and fall in love with Greece"
                            label = "Greece"
                            path = '/services'
                        
                        />
                        <CardItem 
                            src= {Greece}
                            text="Explore and fall in love with Greece"
                            label = "Greece"
                            path = '/services'
                        
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards;
