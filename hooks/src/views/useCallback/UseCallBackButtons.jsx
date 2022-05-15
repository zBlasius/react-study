import React from 'react'

const useCallbackButtons = (props) =>{
    console.log("render...");

    return(
        <div>
            <button onClick={()=> props.inc(6)} >  +6  </button>
            <button onClick={()=> props.inc(12)} > +12 </button>
            <button onClick={()=> props.inc(18)} > +18 </button>
        </div>
    )
}

export default React.memo(useCallbackButtons)
// o que o React.memo faz ???