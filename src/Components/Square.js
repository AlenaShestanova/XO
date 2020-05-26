import React,{useState} from 'react'
export default function Square(props) {
    const [state,setState]=React.useState(null)
return(
    <button className="square" onClick={()=>setState('x')}>
        {state}

    </button>
)
}