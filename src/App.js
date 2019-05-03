import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import HomeFilter from './components/HomeFilter';
import NavTab from './components/NavTab';
import Region from './components/Region';
import SaleType from './components/SaleType';

import { BrowserRouter, Route, Link } from "react-router-dom";

class  App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '',
                  date : null};

    this.handleChange = this.handleChange.bind(this);
    this.addLeadingZeros = this.addLeadingZeros.bind(this);

  }
  handleChange(event) {
     this.setState({value: event.target.value});
   }
   addLeadingZeros(event){
    let s='000000'+event.target.value;
     this.setState({value: s.slice(-6)});
   }

   dateChange(event) {
        this.setState ({date: event.target.value});
    }

render() {
  return (
    <div>
    <div>
    <label>
          Name:
          <input type="text" value={this.state.value} maxLength="6"  placeholder="Enter Name"
          onChange={this.handleChange}
          onBlur={this.addLeadingZeros}
          />
    </label>
    </div>
    <div className= "App">
    <Route path="/home" component={HomePage} />
    <Route path="/header" component={Header} />
    <Route path="/navtab" component={NavTab} />
    <Route path="/region" component={Region} />
    <Route path="/homefilter" component={HomeFilter} />
    <Route path="/saletype" component={SaleType} />
    </div>
    <div>

    </div>
    </div>
  );
}
}

export default App;
