import React from 'react'
import './NavBar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const NavBar = props => (
    <aside className="Menu" >
        <nav>
            <ul>
                <li>
                    <Link exact to="/"> Home </Link>
                </li> 
                <li> 
                    <Link to='/store'> Store </Link>
                </li>
                <li>
                   <Link to="/useState"> UseState() </Link> 
                </li>
                <li>
                    <Link to="/useEffect"> UseEffect()  </Link>
                </li>
                <li>
                    <Link to="/useRef"> useRef() </Link>
                </li>  
                <li>
                    <Link to="/useMemo"> useMemo() </Link>
                </li>
                <li> 
                    <Link to="/useCallback"> useCallback() </Link>
                </li>
                <li>
                    <Link to="/useContext"> useContext() </Link>
                </li>
                <li>
                    <Link to="/useReducer"> useReducer() </Link>
                </li>
                <li>
                    <Link to="/useMyHook"> useMyHook() </Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default NavBar