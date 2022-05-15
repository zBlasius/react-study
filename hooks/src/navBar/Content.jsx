import './Content.css'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Store from '../data/Store'
  import Home from '../views/Home/Home'
  import UseCallback from '../views/useCallback/UseCallback'
  import UseContext from '../views/useContext/UseContext'
  import UseTestContext from '../views/useContext/UseTestContext'
  import UseEffect from '../views/useEffect/UseEffect'
  import UseMemo from '../views/useMemo/UseMemo'
  import UseReducer from '../views/useReducer/UseReducer'
  import UseRef from '../views/useRef/UseRef'
  import UseRef2 from '../views/useRef/UseRef2'
  import UseState from '../views/useState/UseState'
  import UseMyHook from '../views/useMyHook/UseMyHook'
 
  const Content = props => (
      <main className="Content"> 
          <Switch>
              <Route exact path="/"> 
                <Home/>
              </Route>

              <Route path='/Store'>
                  <Store/>
              </Route>

              <Route path="/UseState">
                  <UseState/>
              </Route>

              <Route  path="/UseEffect" >
                  <UseEffect/>
              </Route>

              <Route path="/UseRef">
                  <UseRef/>
              </Route>

              <Route path="/UseRef2">
                  <UseRef2/>
              </Route>

              <Route path="/UseMemo">
                  <UseMemo/>
              </Route>

              <Route path="/UseCallback">
                  <UseCallback/>
              </Route>

              <Route path="/UseContext">
                  <UseContext/>
              </Route>

              <Route path="/UseTestContext">
                <UseTestContext/>
              </Route>   

              <Route path="/UseReducer">
                  <UseReducer/>
              </Route>

              <Route path="/UseMyHook">
                  <UseMyHook/>
              </Route>
          </Switch>
      </main>
  )

  export default Content