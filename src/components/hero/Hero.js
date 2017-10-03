import React, { Component } from 'react';
import './Hero.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Background1 from '../../assets/travel_hero.jpg'
import Background2 from '../../assets/aruba_beach1.jpg'
import Background3 from '../../assets/spain.jpg'
import Background4 from '../../assets/italy.jpg'

class Hero extends React.Component {
    constructor(props) {
        super(props);
    }
    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }
    render() {
      return(
        <div style={{height:300,margin:0}}>
            <br/>
            <br/> 
            <h1> Welcome to My Travel Site</h1>
          <React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
          >
            <div className="image" style={{height:380,width:"100%",backgroundImage:`url(${Background1})`}}>
            </div>
            <div className="image" style={{height:380,width:"100%",backgroundImage:`url(${Background2})`}}>
              456
            </div>
            <div className="image" style={{height:380,width:"100%",backgroundImage:`url(${Background3})`}}>
              789
            </div>
             <div className="image" style={{height:380,width:"100%",backgroundImage:`url(${Background4})`}}>
              789
            </div>
          </React_Bootstrap_Carousel>
        </div>
      )
    }
};


export default Hero;