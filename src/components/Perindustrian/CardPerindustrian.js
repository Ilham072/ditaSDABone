import React from 'react';
import Besi from './../../image/Besi.png'
import button from './../../image/button1.png';
import './../Card.css';
const CardPerindustrian = () => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={Besi} alt="Besi"/>
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

export default CardPerindustrian;