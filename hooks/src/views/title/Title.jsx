import React from 'react'
import './title.css'

export default props => {

    return(
        <div className="titulo">
            <h2> {props.titulo} </h2>
            <h5> {props.subtitulo} </h5>
        </div>
    );
}