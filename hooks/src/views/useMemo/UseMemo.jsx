import React, { useState, useMemo } from 'react'
import PageTitle from '../title/Title'

function sum(a,b){
    return a + b;
}

const UseMemo = props => {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    const result = useMemo(()=> sum(n1,n2), [n1,n2]) // como se fosse um useEffect  --> useMemo(()=> FUNÇÃO, [valores])

    return (
        <div className="Cabecalho">
            <header>
                <h1> UseMemo</h1>
                <h5> Retorna um valor memorizado </h5>
            </header>

            <div style={{ display: 'flex', gap:20,alignItems:'center', flexDirection:'column', marginTop:20}}>
                <input type="number" className="input" value={n1} onChange={e => setN1(parseInt(e.target.value))} />

                <input type="number" className="input" value={n2} onChange={e => setN2(parseInt(e.target.value))} />

                <input type="number" className="input" value={n3} onChange={e => setN3(parseInt(e.target.value))} />

                <span style={{fontSize:30}}> {result } </span>
            </div>

            

        </div>
    )
}

export default UseMemo