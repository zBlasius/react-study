import React , {useState} from 'react'

const initialState ={
    number: 9281,
    text: "API + Hooks"
}

export const AppContext = React.createContext(initialState)

const Store = props =>{
    const [state , setState] = useState(initialState)

    function updateState(key,value){
        setState({
            ...state,
            [key]:value
        })
    }

    return (
        <AppContext.Provider value={{
            number:state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t)
            }}>
             {props.children} {/* Aqui vai ser apresentado todos os componentes dentro de Store. Lembrando que isso é com base no que há em App.jsx */}
        </AppContext.Provider>
    )
}

export default Store