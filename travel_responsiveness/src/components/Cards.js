import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Greece from "../images/greece.jpg";
import EasterIsland from "../images/easterisland.jpg";
import Peru from "../images/peru.jpg";
import Malaysia from "../images/malaysia.jpg";
import Kenya from "../images/kenya.jpg";

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
                            src= {EasterIsland}
                            text="Witness the mysteries of Easter Island"
                            label = "Easter Island"
                            path = '/services'
                        
                        />
                        <CardItem 
                            src= {Peru}
                            text="Reach new altitudes in Peru"
                            label = "Peru"
                            path = '/services'
                        
                        />
                        <CardItem 
                            src= {Malaysia}
                            text= "Visit the orangutans of Borneo"
                            label = "Malaysia"
                            path = '/services'
                        
                        />
                        <CardItem 
                            src= {Kenya}
                            text= "Make new friends in Kenya"
                            label = "Kenya"
                            path = '/services'
                        
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards;
