import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './routes/Home';
import About from  './routes/About';
import Bright from  './routes/Bright';

function App() {

  return <HashRouter>
    {/* <ScrollToTop /> */}
    {/* <Navigation/> */}
    <Route path='/' exact={true} component= {Home} />
    <Route path='/about' component= {About} />
    <Route path='/bright' component= {Bright} />
  </HashRouter>

}

export default App;