import React, {useState, useEffect, useRef} from 'react'
import Title from '../title/Title'

const merge = (s1, s2)=> {
    let teste
    s1.map((item,index)=>{
        teste = `${item[index]} ${s2[index]}` // verificar depois
    })
    return teste
}   

const UseRef2 = props => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [total, setTotal] = useState("")
    const count = useRef(-1) // UseRef = Passagem por referência. Count é na verdade, um objeto com o parametro current dentro dele
    // esse Objeto terá sempre a mesma referência
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(()=>{
        count.current++
        myInput2.current.focus()
    },[value1])

    useEffect(()=>{
        count.current++
        myInput1.current.focus()
    },[value2])
    
    count.current = count.current+1
    return (
        <div className="Cabecalho">
            <header>
                <h1> UseRef</h1>
                <h5> Retorna um objeto mutável com a propriedade .current! </h5>
            </header> 

            <div>
                <span> Valor: </span> 
                <span> {merge(value1,value2)}</span>
                <span> [{count.current}] </span> 
                
            </div>
            
            <div className="Corpo">
            <Title titulo="Exercicio01"/>
               <input type="text" className="input" value={value1} 
               ref={myInput1}
               onChange={(e)=> { 
                   setValue1(e.target.value)
                   merge(value1,value2)
                }}/> 
            </div>


            <div className="Corpo">
            <Title titulo="Exercicio02"/>
               <input type="input" className="input" value={value2} 
                ref={myInput2}
               onChange={(e)=> { 
                    setValue2(e.target.value)
                    merge(value1,value2)
                }}/> 
            </div>

        </div>
    )
}

export default UseRef2