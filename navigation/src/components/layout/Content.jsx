import './Content.css'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from '../../views/examples/Home'
import About from '../../views/examples/About'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/"> {/* Serve para entrar no hoome sem bugar o site */}
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/param/:id"> {/* quer dizer que serà passado um par6ametro a partir da URL */}
                <Param/>
            </Route>
            <Route path="*">  {/* Se cair em qualquer outra url que não seja as acima, vai para essa página */}
                <NotFound/>
            </Route>
        </Switch>
    </main>  
)

export default Content