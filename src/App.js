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

// import React from "react";
// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Button variant="contained" color="primary"> Hello World</Button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;