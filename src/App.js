import React, { Component } from 'react';
import Image from './components/set_images';
import Url from './components/set_url';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={Url.image1} />
        <Image url={Url.image2} />
        <Image url={Url.image3} />   
      </div>
    );
  }
}
export default App;