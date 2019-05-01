import React from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.addLeadingZeros = this.addLeadingZeros.bind(this);
  }
  handleChange(event) {
     this.setState({value: event.target.value});
   }
   addLeadingZeros(event){
    let s='00000'+event.target.value;
     this.setState({value: s.slice(-5)});
   }

render() {
  return (
    <div>
    <label>
          Name:
          <input type="text" value={this.state.value} maxLength="6"  placeholder="Enter Name"
          onChange={this.handleChange}
          onBlur={this.addLeadingZeros}
          />
    </label>
    </div>
  );
}
}

export default App;
