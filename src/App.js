import React from 'react'; //react has to be in scope to use jsx
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import PageHeader from './PageHeader'
import PageContent from './PageContent'
import Footer from './Footer'
// import logo from './logo.svg';
import './App.css';
import SelectedProject from './SelectedProject'
import data from './data'


function App() {
  return (
    <Router>
       <div className="App">
        <PageHeader />
        <Route exact path='/' component={PageContent} />
        <Route path='/:index' component={SelectedProject} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
