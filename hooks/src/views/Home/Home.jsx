import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import '../estilo/Geral.css'

import Title from '../title/Title'


const UseMyHook = props => {
    const[valor, setValor] = useState('State padrão')

    return(
       <div>
           Home
       </div>

        
    )
}

export default UseMyHook 