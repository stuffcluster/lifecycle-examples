import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mount from './Mount';
import ButtonToMount from './ButtonToMount.js';
import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  `

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
      <FlexWrapper>
        {this.state.isMounted
          ?
          <Mount
          toggleMount={this.toggleMount}
          clickHandler={this.changeColor}
          />
          :
        <ButtonToMount clickHandler={this.toggleMount}/>
        }
      </FlexWrapper>
    );
  }
}

export default App;
