import React from 'react';
import Ikan from './../../image/Ikan.png';
import button from './../../image/button1.png';
import './../Card.css';
const CardPerikanan = () => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={Ikan} alt="Ikan"/>
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

export default CardPerikanan;