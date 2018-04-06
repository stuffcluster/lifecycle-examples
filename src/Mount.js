import React, { Component } from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 200px;
  height: 200px;
  background: teal;
  border-radius: 10px;
  color: white;
  margin: 20px;
  `

export default class Mount extends Component {

  componentDidMount(){
    setTimeout(() => {
      this.props.toggleMount();
    }, 5000);
  }
  componentWillUpdate(){
    console.log('will update');
  }
  componentDidUpdate(){
    console.log('did update');
  }
  componentWillReceiveProps(){
    console.log('props recieved');
  }
  componentWillUnmount(){
    console.log(`Don't mount me bro!`);
  }

  render() {

    return (
      <StyledButton onClick={this.props.clickHandler}
      >
        Hello World
        Hello World
        Hello World
        Hello World
        Hello World
        Hello World
      </StyledButton>
    )
  }
}
