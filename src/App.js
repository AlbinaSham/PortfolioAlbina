import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';
import IconMeenu from './Components/IconMeenu/IconMeenu';


import ContactMe from './Pages/ContactMe/ContactMe';
import Home from './Pages/Home/Home';
import Meenu from './Pages/Meenu/Meenu';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
    <Router>
       <Meenu />
      <Switch>
        <Route to exact path='/PortfolioAlbina' component={Home}>
             
        </Route>
        <Route to path='/contactme' component={ContactMe}>
           
        </Route>
        <Route to path='/projects' component={Projects}>
           
        </Route>
      </Switch>
    </Router>
    
      
    </div>
  );
}

export default App;
