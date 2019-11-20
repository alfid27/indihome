import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import "../style/style.css"

class App extends Component {
  render() {
    return (
        <div>
          <div className="navbar">
            <a className="logo"><img src={require('../logo/logo.png')}></img></a>
            <ul>
              <li><a href>PROMO</a></li>
              <li><a href>PAKET & ADD-ON</a></li>
              <li><a href></a>PUSAT BANTUAN</li>
              <li><a href></a>INFO TERKINI</li>
            </ul>
          </div>
          <div className="wrapper">
          <div className="content">
            <p>Berlangganan IndiHome bisa dapat internet cepat, nelpon rumah sepuasnya dan nonton beragam konten terbaik di layar TV interaktif</p>
          </div>
          <div className="content-2">


            </div>
            <div className="content-3">
              <div id="box1">

              </div>
            </div>
            <div className="content-3">
              <div id="box2">
              </div>
            </div> 
          </div>
          </div> 
    );
  }
} 

export default App;