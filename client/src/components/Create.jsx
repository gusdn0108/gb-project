import React, { useEffect,  useState } from 'react'

const Create = ({callback,defaultValues}) => {
 
    const [newState, setNewState] = useState({
        label : '',
        value : '',
    })
    useEffect(() => {
        setNewState(defaultValues)
    }, [defaultValues])
    


    const callbackHandler = (e) => { 
        e.preventDefault()
        callback(newState)
     }

  return (
    <div>
        <label htmlFor='label'>할일</label>
        <input id="label" onChange={(e)=>{
            e.preventDefault()
            setNewState({
                ...newState,
                label:e.target.value
            })
        }}/>
        <label htmlFor='value' >할것</label>


        <input id="value" onChange={(e)=>{
            e.preventDefault()
            setNewState({
                ...newState,
                value:e.target.value
            })
        }}/>
       <button onClick={callbackHandler}>적용</button>
    
    </div>
  )
}

export default Create