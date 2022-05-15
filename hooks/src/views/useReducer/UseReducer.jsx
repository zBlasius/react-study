import React, { useReducer } from 'react'
import '../estilo/Geral.css'

const initialState = {
    cart: [],
    products: [],
    //foco
    number: 0,
    user: { name: 'nothing' }
}

const secondInitialState = {
    cart:[],
    products:[],
    user:null,
    number:0
}

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}

function reducerTest(state,action){
    switch (action.type){
        case 'addNumber2':
            return {...state, number: state.number +2}
        case 'multiplyFor7':
            return {...state, number: state.number * 7}
        case 'shareBy25':
            return {...state, number: state.number / 25}
        case 'addNumber9':
            return {...state, number: state.number + action.payload}
        case 'parseToInteger':
            return {...state, number: parseInt(state.number)}
            
    }
}


const UseReducer = props => {
    const [firstState, dispatch] = useReducer(reducer, initialState)
    const [secondState, dispatchTest] = useReducer(reducerTest, secondInitialState)

    return (
        <div className="Cabecalho">
            <header>
                <h1> useReducer</h1>
                <h5> Explicando o componente </h5>
            </header>

            <div className="Corpo">
                <h1> #Exercicio 01 </h1>
                <h3> {firstState.user.name} </h3>
                <div className="groupButton">
                    <input className="btn" type='button' value={firstState.number} onClick={() => dispatch({ type: 'numberAdd2' })} />
                    <input className="text" type="text"  value={firstState.user.name} onChange={(e) => dispatch({ type: 'login', payload: e.target.value })} />
                </div>
            </div>

            <div className="Corpo">
                <h1> #Exercicio 02 - Challenge </h1>

                <div className="Instructions">
                    <h4>Intructions</h4>
                    <span> 1 - Create a number and multiply for seven. </span>
                    <span> 2 - Share the result by twenty-five </span>
                    <span> 3 - Create a function to tranform for a integer. </span>
                    <span> 4 - Add some number of your choice. </span>
                </div>

                <div className="groupButton">
                    <button className="btn" type="button" onClick={()=>  dispatchTest({type:'addNumber2'})}> +2 </button>
                    <button className="btn" type="button" onClick={()=>  dispatchTest({type:'multiplyFor7'})}> *7 </button>
                    <button className="btn" type="button" onClick={()=>  dispatchTest({type:'shareBy25'})}> /25 </button>
                    <button className="btn" type="button" onClick={()=>  dispatchTest({type:'addNumber9', payload:9})}>  +9 </button>
                    <button className="btn" type="button" value={"Interger"} onClick={()=>  dispatchTest({type:'parseToInteger'})}> Inteiro </button>
                </div>
            </div>

            {secondState.number}
        </div>
    )
}

export default UseReducer