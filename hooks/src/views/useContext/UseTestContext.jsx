import React , {useContext} from 'react'
import DataContext2 from '../../data/DataContext2'

const UseTestContext = props => {

    const context = useContext(DataContext2)
    console.log("context", context)

    function addNumber(delta){
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }

    return(

        <div style={{display:'flex', flexDirection:'column' , margin:'100px'}}>
            <div>
                <input type='button' value='+1' onClick={()=> addNumber(1) } />
                <input type='button' value='-1' onClick={()=> addNumber(-1)} />
            </div>
            <span>{context.state.number} </span>
            <span>{context.state.text} </span>
        </div>
    )
}

export default UseTestContext
