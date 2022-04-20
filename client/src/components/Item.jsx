import React, { useState } from 'react'
import ItemValue from './ItemValue'

const Item = ({item,index, deleteCallback, updateCallback}) => { 
    const [isValueOpen, setIsValueOpen] = useState(false)
    return(
        <div><button onClick={(e)=>{
            e.preventDefault()
            setIsValueOpen(!isValueOpen)
        }}>{index+1} {item.label}</button>
        {isValueOpen===true?
        <ItemValue 
        defaultValue={item} 
        value={item.value} 
        callbackHandler={(value)=>{
            updateCallback(index,value)
        }}
          deleteCallback={(e)=>{
            e.preventDefault()
            deleteCallback(index)
        }}/>
        :null}
        </div>
    )
 }

export default Item