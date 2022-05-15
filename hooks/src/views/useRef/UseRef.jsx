import React, { useEffect, useRef, useState } from 'react';
import Title from '../title/Title';



const UseRef = props => {
    const [value01, setValue01] = useState("");
    const [value02, setValue02] = useState("");

    const [value03, setValue03] = useState("");
    const [value04, setValue04] = useState("");

    const myInput03 = useRef(null)
    const myInput04 = useRef(null)

    const count01 = useRef(0) // me Retorna um objeto com o atríbuto .current, ao chamar o count, devo chamar o current também(count.current), pois no caso é o que me interessa
    const count02 = useRef(0)

    var i=0

    const merge = function (s1,s2) {// a constante armazenou uma função com dois parâmentros
        return [...s1].map((e,i) => `${e}${s2[i] || ""}`).join("")  // [...s1] vai transformar o paramtro s1 em um array de letras, depois vai mapear '.map()', e dentro desse map, e = cada letra, i = indice
    }// vai retornar a letra mais a letra no indice correspondente a string de s2. Imagine um for onde cada i equivale a prosição do array.
        // se eu colocar sem o .join(""), o código acima me retorna um array, esse .join('') serve para transformar tudo em string de novo
    

    /// count.current ++ // Desse modo, vai alterar sempre que for alterado qualquer input, em todas as rendereizações.. 
    // Lembre-se que a nova reenderização só ocorre com a mudança de algum estado. Se vc colasse um input avulso, não iria funcionar
    useEffect(e=>{
        count01.current++ // Assim muda o count só quando um input específico for mudado. Para ser geral, deve ser fora da função
    },[value01 /*, value02 */])  

    useEffect(e=>{
        count02.current++
        myInput03.current.focus()
        
    },[value04]);

    useEffect(e=>{
        count02.current++
        myInput04.current.focus()
        merge(value03,value04)
    }, [value03])

    return(
        <div className="Cabecalho">
            <header>
                <h1> UseRef</h1>
                <h5> Retorna um objeto mutável com a propriedade .current! </h5>
            </header>

            <Title titulo="Exercicio 01" />
            <div className="Corpo">
                <p> Input 01  <input type="text" value={value01} onChange={e => setValue01(e.target.value)}/> </p>
                <p> Input 02   <input type="text" value={value02} onChange={e => setValue02(e.target.value)} /> </p>
                <span>Valor: [</span> 
                <span> {count01.current} ] </span>
            </div>

            <Title titulo="Exercicio 02" />
            <div className="Corpo">

                    <p><input type="text" value={value03} 
                    ref={myInput03}
                    onChange={e => setValue03(e.target.value)}/></p>

                    <p><input type="text" value={value04} 
                    ref={myInput04}
                    onChange={e => setValue04(e.target.value)}/></p>

                <span>Valor: [</span>
                <span> {count02.current} ] </span>
                    <p>{value03}</p>
                    <p>{value04}</p>
                    <h2> {merge(value03, value04)} </h2>
            </div>
        </div>
    )
}

export default UseRef