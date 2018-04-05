import React, { Component } from 'react'

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
      <button onClick={this.props.clickHandler}
      >
        Hello World
        Hello World
        Hello World
        Hello World
        Hello World
        Hello World
      </button>
    )
  }
}
