import React , { useState, useCallback } from 'react'
import {useParams} from 'react-router-dom'
import UseCallBackButtons from './UseCallBackButtons'


const UseCallback = props => {

    const [result , setResult] = useState(0)

    const inc = useCallback(function (delta){
        setResult(curr => curr + delta)
    }, [setResult]) 

    return(
        <> 
            <div className="Cabecalho">
                <header>
                    <h1> useCallback() </h1>
                    <h2> Retorna uma função cacheada! </h2>
                </header>
            </div>
            
            <div>
                <UseCallBackButtons inc={inc} />
                <span> {result} </span>
            </div>
        </>
    )
}

export default UseCallback