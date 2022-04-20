import React, { useState } from 'react'
import Create from './Create'

const ItemValue = ({value, deleteCallback ,defaultItem, callbackHandler})=>{
const [isUpdateOpen, setIsUpdateOpen] = useState(false)

    return(
        <div>
            <div>{value}</div>
            <button onClick={deleteCallback}>delete</button>
            <button onClick={(e)=>{
            e.preventDefault()
            setIsUpdateOpen(!isUpdateOpen)
            }}>update</button>
            {isUpdateOpen?
             <Create defaultValues={defaultItem} callback={callbackHandler} />:null}
           
        </div>
    )
}

export default ItemValue