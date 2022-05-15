import React , {useState} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Menu from './navBar/NavBar'
import Content from './navBar/Content'
import DataContext , {data} from './data/DataContext'
import Store from './data/Store'


function App() {
  const [state , setState] = useState(data)

  return (
    <div className="App">  
    <Store> 
      <DataContext.Provider value={{state , setState}}>  
          <Router>
              <Menu/>
              <Content/>
          </Router>
      </DataContext.Provider>
    </Store>
    </div>
  );
}

export default App;
