import React from 'react';
import Sapi from './../../image/Sapi.png'
import button from './../../image/button1.png';
import './../Card.css';
const CardPeternakan = () => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={Sapi} alt="Sapi"/>
            </div>
            <div className="card-content">
                <span>Title</span>
                <a href="#">
                    <button>
                        <img src={button}/>
                    </button>
                </a>
            </div>    
        </div>
    )
}

export default CardPeternakan;