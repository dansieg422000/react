import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function HelloWorld(props, e) {
   return <h1>Hello, {props.name}!</h1>;
}

class App extends Component {
  elemClick = () => {
    console.log(this);
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div>
                <HelloWorld name="World" onClick={this.elemClick} />
                <button onClick={this.elemClick}>
                    Click me
                </button>
            </div>
            {/*<p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>*/}
        </header>
      </div>
    );
  }
}

export default App;
