import React, { useState } from 'react'
import Create from './components/Create'
import List from './components/List'
import Test from './Test'

const App = () => {
  const [list, setList] = useState([])
  const callbackHandler = (value) => { 
    setList([...list,value])
   }
   const dddddddddddd = (e) => { 
     console.log('저쩔티비~~')
    }
  return (
    <div>
      <h1>Hi Todo list</h1>
        <Create callback={callbackHandler}/>
      <List list={list} setList={setList}/>
      <input tpye="file"/>
      <Test
        test="안녕 나는 테스트 어트리뷰트야~ 나는 타입이 스트링이야"
        functionNeme={() => {
          console.log('어쩔티비~~')
          dddddddddddd()
          return '나는 펑션 이야~'
        }}
        bool={true}
      />
    </div>
  )
}

export default App