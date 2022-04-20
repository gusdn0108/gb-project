import React  from 'react'
import Item from './Item'

const List = ({list,setList}) => {   
    const  deleteHandler = (index) => { 
        const result = Array.from(list)
        result.splice(index,1)
        setList(result)
     }
     const updateHandler = (index , value) => { 
        const result = Array.from(list)
        result.splice(index,1,value)
        setList(result)
      }
  return (
    <div>
        {list.map((item,i)=>{
           return (
               <Item  key={i} item={item} index={i}  deleteCallback={ deleteHandler} updateCallback={updateHandler}></Item>
           )
        })}
    </div>
  )
}

export default List




