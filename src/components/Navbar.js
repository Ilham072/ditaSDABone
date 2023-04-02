import React, { Component } from "react";
import './Navbar.css';
import icon_beranda from '../image/icon_beranda.png';
import icon_pertanian from '../image/icon_pertanian.png';
import icon_peternakan from '../image/icon_peternakan.png';
import icon_perikanan from '../image/icon_perikanan.png';
import icon_perindustrian from '../image/icon_perindustrian.png';
import icon_pariwisata from '../image/icon_pariwisata.png';
import line1 from '../image/line1.png';
import icon_saran from '../image/icon_saran.png';
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";


class Navbar extends Component {
    render() {
        return (
            <div className="sidebar">
                <nav className="navbar">
                    <ul>
                        <li><b>MENU</b></li>
                        <li><Link to="/" activeClassName="active"><img src={icon_beranda} /> Beranda</Link></li>
                        <li><Link to="/Pertanian" activeClassName="active"><img src={icon_pertanian} /> Pertanian</Link></li>
                        <li><Link to="/Peternakan" activeClassName="active"><img src={icon_peternakan} /> Peternakan</Link></li>
                        <li><Link to="/Perikanan" activeClassName="active"><img src={icon_perikanan} /> Perikanan</Link></li>
                        <li><Link to="/Perindustrian" activeClassName="active"><img src={icon_perindustrian} /> Perindustrian</Link></li>
                        <li><Link to="/Pariwisata" activeClassName="active"><img src={icon_pariwisata} /> Pariwisata</Link></li>
                        <li><img src={line1} /></li>
                        <li><b>LAINNYA</b></li>
                        <li><a href="#"><img src={icon_saran} /> Saran</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;