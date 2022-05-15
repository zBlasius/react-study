import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Menu.css'


const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/param/123"> Param #01 </Link> {/*Então 123 vai ser passado como paramentro (observar Content.jsx, linha:20) */}
                </li>
                <li>
                    <Link to="/param/xuxa"> Param #02 </Link>
                </li>
                <li>
                    <Link to="/about"> About </Link>
                </li>
                <li>
                    <Link to="/DontExist"> Nothing else matters </Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu