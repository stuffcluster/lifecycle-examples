import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mount from './Mount';

class App extends Component {
  state= {
    isMounted: false,
    isRed: false,
  }

  toggleMount=()=>{
    this.setState(prevState=> ({ isMounted : !(prevState.isMounted) }));
  }

  changeColor=()=>{
    this.setState(prevState => ({ isRed : !(prevState.isRed)}));
  }

  render() {
    return (
      <div>
        {this.state.isMounted 
          && 
          <Mount 
          toggleMount={this.toggleMount}
          clickHandler={this.changeColor}
          />}
        <button onClick={this.toggleMount}>Button</button>
      </div>
    );
  }
}

export default App;
