import React, { Component } from 'react';
import './Cards.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Cards extends Component {
  render() {
    return (


<div className="col-md-3 text-center">
    <br/>  
        <br/> 
          <div className="thumbnail">
          <img src={this.props.image} />
          <div className="caption">
            <h3>{this.props.name}</h3>
            <a href={this.props.link} target="_blank">{this.props.name} Tourism Site</a>
          </div>
        </div>
       <br/>  
        <br/> 
    </div>
      
    );
  }
}

export default Cards;