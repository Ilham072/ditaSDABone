import React from "react";
import Carousel from "./Carousel";
import CardList from "./CardList";
const Beranda = () => {
    return (
        <div>
            <container>
                <h3>Beranda</h3>
                <Carousel />
                <CardList />
            </container>
        </div>
    );
}

export default Beranda;