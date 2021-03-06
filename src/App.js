import React, { Component } from 'react';
import Links from './Links/Links';
import Title from './components/Title';
import ExternalLinks from './components/ExternalLinks';
import Card from './components/Card/Card';
import './App.css';
import './index.css'


class App extends Component {
  constructor(){
    super();
    this.state = {
      page: 'home',
      message: '',
      email: ''
    }
  }

layoutChange = (newPage) => {
  this.setState({page: newPage})
}

messageChange = (event) => {
  this.setState({message: event.target.value})
  console.log(this.state.message)
}

emailChange = (event) => {
  this.setState({email: event.target.value})
}

  render() {
  return(
  <div className='App' >
        <Links layoutChange={this.layoutChange}/>
        <ExternalLinks />
        <Card messageChange={this.messageChange} 
                page={this.state.page} 
                layoutChange={this.layoutChange}
                email={this.state.email}
                emailChange={this.emailChange}
                message={this.state.message}
                />
  </div>
  )}


}

export default App;
