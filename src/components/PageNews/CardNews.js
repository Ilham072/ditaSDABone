import React from 'react';
import pertanian from './/../../image/panen_padi.png';
import button from './/../../image/button1.png';
import pertanian_logo from './/../../image/icon_pertanian.png';
import './CardNews.css';

const CardNews = () => {
    const cards = [1, 2, 3];
    return (
        <div className="CardNews">
            <div className="CardNews-category">
                <img src={pertanian_logo}/>
                <span>Pertanian</span>
            </div>
            <div className="CardNews-image">
                <img src={pertanian} alt="Pertanian" />
            </div>
            <div className="CardNews-content">
                <div className="CardNews-description">
                Panen Padi Mandiri Benih Sulsel, Hasil Pertanian di Bone Meningkat di banding tahun-tahun sebelumnya.
                </div>
                <div className="card-button">
                    <a href="#">
                        <button>
                            <img src={button}/>
                        </button>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default CardNews;
