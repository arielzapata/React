import React from 'react';
import './App.css';
import Row from './components/Row';
import Header from './components/Header';

const items = []

function App() {
  let Hour=" AM";
  let state="false"
  
  for (let hour = 1; hour < 25; hour++) {
    Hour = hour > 11? " PM" : " AM"
    state = hour == 10? "true" : "false"
    items.push(<Row label = {hour + Hour} show={state} data = "Meeting, 10:30 AM"/>)
  }
  return (
    <div className="App">
      <Header/>
      <div>
        {items}
      </div>
    </div>
  );
}

export default App;