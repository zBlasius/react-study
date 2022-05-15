import React, {useState} from 'react'
import './contador.css'

export default props =>{
    const [valor, setValor] = useState(0) 
    // condição ate 10, nao menos que 0

    function condicao(op){
        if (valor < 10 && valor >= 0) {
            if(op ===  1) { return setValor(valor +1) }
            if(op === -1) { return setValor(valor -1) }
        } else {
            return setValor(0)
        }
    }
    return(
        <div className="centro">
            <p> {valor} </p>
            <button onClick={_=> condicao( 1) }>  +1 </button>
            <button onClick={_=> condicao(-1) }>  -1 </button>
        </div>
    );
}