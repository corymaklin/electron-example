import React, { Component } from 'react';

const { ipcRenderer } = window.require('electron');

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        arg: ''
      };
      this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
      ipcRenderer.on('example', (event, arg) => {
        this.setState({
          arg: arg
        });
      })
  }

  handleClick() {
      ipcRenderer.send('example', 'Hello World');
  }

  render() {
    const { arg } = this.state;

    return (
      <div>
        <h1>{ arg }</h1>
        <button onClick={ this.handleClick }>Click</button>
      </div>
    );
  }
}

export default App;
