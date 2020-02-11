import React from 'react'; //react has to be in scope to use jsx
import Heading from "./heading"
// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading title='Hello World' subtitle='Foo Bar' />
        <Heading title='This is cool' subtitle='Foo Bar' />
      </header>
    </div>
  );
}

export default App;
