import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Cards from './components/cards/Cards';
import Table from './components/table/Table';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <div >

        <Navigation />
        <Hero />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="wrap">
        <Cards name="Aruba" image="assets/aruba_flag.svg" link="http://chile.travel/en/" />
        <Cards name="Chile" image="assets/chile_flag.svg" link="http://www.spain.info/en_US/" />
        <Cards name="Italy" image="assets/italy_flag.svg" link="http://www.italia.it/en/home.html" />
        <Cards name="Spain" image="assets/spain_flag.svg" link="http://www.spain.info/en_US/" />
        </div>
        <h3> Some information on places I would like to visit </h3>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Destination</th>
              <th>Capital</th>
              <th>Official Language</th>
              <th>Population (aprox.)</th>
              <th>National Bird</th>
            </tr>
           </thead> 
          <tbody>
            
            <Table destination="Spain" capital="Madrid" language="Spanish" population="46.77 million" bird="Eagle" />
            <Table destination="Italy" capital="Rome" language="Italian" population="59.83 million" bird="Bluebirds" />
            <Table destination="Spain" capital="Aruba" language="Oranjestad" population="102,911" bird="Aruban Burrowing Owl" />
            <Table destination="Spain" capital="Chile" language="Santiago" population="17.62 million" bird="Andean condor" />
           </tbody> 
        </table>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
