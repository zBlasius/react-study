import React from 'react'

import {useParams} from 'react-router-dom'



const Param = props => {
    const { id } = useParams()

    return (
        <div className="Param">
            <h1> Param </h1>
            <p> Valor: {id} </p> {/* Então é passado um valor com base na URL passada em menu.jsx */}
        </div>
    )
}

export default Param