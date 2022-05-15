import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Title from '../title/Title'
import './useEffect.css'


const UseEffect = props => {
    // EX #01
    const [valor, setValor] = useState(0) // observe que valor, é o Input
    const [fatorial, setFatorial] = useState(1) //  e que fatorial é o calculo fatorial retornado

    // EX #02
    const [number, setNumber] = useState(0)
    const [verify, setVerify] = useState(Boolean)


     //EX #01
    useEffect(_=> { // 1 parâmetro: Vai chamar a função sempre que algo mudar ** com arrow function
        setFatorial(calcFatorial(valor))
    },[valor]) // 2 parâmetro, pergunte-se: Do que eu dependo para calcular o fatorial?

    useEffect(function(){
        if(fatorial > 10000000){
            document.title = 'eita !!'
        }
    },[fatorial/*, OutraVar */]) // Pode ser mais de uma passagem por valor

    //EX #02
    useEffect(function(){
        setVerify(isPar(number))
    },[number])

    function isPar(n){
        if(n % 2 == 0){
            return true
        } else {
            return false
        }
    }

    function calcFatorial(n){
        const num = parseInt(n)
        if(n < 0) return -1
        if(num === 0) return 1
        return calcFatorial(n-1) * n
    }

    return(
        <div className="Cabecalho">
            <header>
                <h1> UseEffect</h1>
                <h5> Permite executar efeitos colaterais em componentes funcionais! </h5>
            </header>

            <Title titulo="Exercicio 01" subtitulo="Calculo fatorial" />
            <div className="Corpo">
                <div>
                    <span> Fatorial </span>
                    <span className="red"> {fatorial === -1 ?'Não existe': fatorial} </span>
                </div>
                <input type="number" onChange={e=>{setValor(e.target.value)}} />
            </div>

            <Title titulo="Exercicio 02" subtitulo="?" />
            <div className="Corpo">
                <div>

                    <span className="red" > {verify == true ? 'Par' : 'Impar'} </span>
                </div>
                <input type="number" onChange={e => setNumber(e.target.value)} />
            </div>
            
        </div>
    )
}

export default UseEffect

/*
 const [valor, setValor] = useState(0)
    const [fatorial, setFatorial] = useState(1)
    setFatorial(calcFatorial(valor)) // Se eu quissese alterar o estado, para o número fatoria do que eu passar na const fatorial, isso deveria funcionar correto?
    // Logicamente, sim, mas no React isso NÃO é possível, para alterar a const valor eu vou precisar chamar o Hooks useEffect

    function calcFatorial(n){
        if(n < 0) return -1
        if(n === 0) return 1
        return calcFatorial(n-1) * n
    }

    Esse erro aconteceu, porque eu fiquei alterando o fatorial e o number pra sempre, ou seja, entrou em loop infinito
    Veja o código acima para saber como resolver esse problema
*/