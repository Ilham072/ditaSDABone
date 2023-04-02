import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Logo from './components/Logo';
// import { Carousel } from 'react-bootstrap';
import ControlledCarousel from './components/Beranda/Carousel';
// import logo from './image/logo_dita.png';
import Card from './components/Card';
import CardNews from './components/PageNews/CardNews';
import CardList from './components/Beranda/CardList';
// import PariwisataCategory from './components/PariwisataCategory.js';
import PertanianCategory from './components/PertanianCategory.js';
import KomoditiCategory from './components/KomoditiCategory.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './components/Beranda/Beranda';
import Pertanian from './components/Pertanian/Pertanian';
import Peternakan from './components/Peternakan/Peternakan';
import Perikanan from './components/Perikanan/Perikanan';
import Perindustrian from './components/Perindustrian/Perindustrian';
import LogoDita from './components/Logo';


function App() {
  return (
    <Router>
      <div className='container'>
        <div className='logo'>
          <div>
            <LogoDita />
          </div>
        </div>
        <div className='header'>
          <div>
            <Header />
          </div>
        </div>
        <div className='nav'>
          <Navbar />
        </div>
        
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Beranda/>} />
            <Route exact path='/pertanian' element={<Pertanian/>} />
            <Route exact path='/peternakan' element={<Peternakan/>} />
            <Route exact path='/perikanan' element={<Perikanan/>} />
            <Route exact path='/perindustrian' element={<Perindustrian/>}/>
              {/* <Route path='/pariwisata' exatct  component={Pariwisata} /> */}
              {/* <PertanianCategory/>
              <PariwisataCategory/>
              <KomoditiCategory/> */}
          </Routes>    
        </div>
        

        {/* <div className='footer'>footer</div> */}
      </div>
    </Router>

  );
}

export default App;
