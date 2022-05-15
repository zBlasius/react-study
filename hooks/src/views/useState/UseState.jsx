import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

import Title from '../title/Title'


const UseState = props => {

    const[valor, setValor] = useState('Gustavo')
    const[contador, setContador] = useState(0)

    return(
        <div className="Cabecalho" >
        <header>
            <h1> Home</h1>
            <h5> Pàgina Principal </h5>
        </header>

        <Title titulo="Exercicio 01" subtitulo="Input"></Title>
            <div className="Corpo">
                <label for="texto"> Texto </label>
                <input id="texto" type="text" onChange={e => setValor(e.target.value)} />
                <p> {valor} </p>
                <p> {valor} </p>
                <p> {valor} </p>
            </div>

        <Title titulo="Exercicio 02" subtitulo="Contador"></Title>
            <div className="Corpo">
                <button onClick={_ => setContador(contador + 1)} > +1 </button>
                <button onClick={_ => setContador(contador - 1)}>  -1 </button>
                <button onClick={_ => setContador(1000)}>1000</button>
                <p> {contador} </p>
                <p>Observe que toda mudança feita, é alterado o ESTADO  da const  </p>
                <p>E para isso, é preciso alterar o elemento SET, que no meu caso é SetValor, o Estado da const não é alterado diretamente, mas sim por um array complementar </p>
            </div>

            
        </div>
    )
}

export default UseState