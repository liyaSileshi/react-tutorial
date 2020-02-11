import React from 'react'; //react has to be in scope to use jsx
import Heading from './heading'
import PageHeader from './PageHeader'
import PageContent from './PageContent'
import Footer from './Footer'
// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
        <PageHeader />
        <PageContent />
        <Footer />
    </div>
  );
}

export default App;
