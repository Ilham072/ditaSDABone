import React from "react";
import './PageNews.css';
import Navbar from "./Navbar";
import Header from "./Header";
import logo from "./image/logo_dita.png"

function App() {
    return (
      <div className='container'>
        <div className='logo'>
          <img src={logo} />
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
            <h4>Beranda</h4>
            
        </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
  }
  
  export default App;