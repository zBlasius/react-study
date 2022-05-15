import React , {useContext, useEffect} from 'react'
import DataContext from '../../data/DataContext'
import {AppContext} from '../../data/Store'

const UseContext = props => {

    const context = useContext(DataContext)

    function addNumber(delta){
        context.setState({
            ...context.state, 
            number: context.state.number + delta
        })
    }

    const {number, setNumber,text, setText} = useContext(AppContext)

    useEffect(()=>{
        if(number > 9290){
            setText('EITA!!!')
        }
    },[number])

    return(
    <> 
        <div className="Cabecalho">
            <header>
                <h1> useContext</h1>
                <h5> Explicando o componente </h5>
            </header>
        </div>

        <div>
            <h2> Exercicio #01 </h2>
            <span>  {context.state.text}   </span>
            <span>  {context.state.number} </span>
        </div>

        <div>
            <button className="btn" onClick={()=> addNumber(-1)}> -1 </button>
            <button className="btn" onClick={()=> addNumber(1)}> +1 </button>
        </div>

        <div style={{margin:'50px' , width:600}}>
             Observe que mesmo saindo da aba useContext e voltando, o estado continua o mesmo que foi alterado. Isso acontece pois há um "componente global" com esse estado, que dispensa a troca de informação direta entre componentes
        </div>


        <h2> Exercicio #02 </h2>
        <span> {number} </span>
        <span> {text} </span>

        <div>
            <input type="button" value='-1' onClick={()=> setNumber(number -1)}/>
            <input type="button" value='+1' onClick={()=> setNumber(number +1)}/>
        </div>
    </>
    )
}


export default UseContext