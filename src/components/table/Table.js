import React, { Component } from 'react';
import './Table.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Table extends Component {
  render() {
    return (
        
                    <tr>
                        <td>{this.props.destination}</td>
                        <td>{this.props.capital}</td>
                        <td>{this.props.language}</td>
                        <td>{this.props.population}</td>
                        <td>{this.props.bird}</td>
                    </tr>
                    

    );
  }
}




export default Table;