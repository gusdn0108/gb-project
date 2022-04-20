import React from 'react'

const Test = ({test , functionNeme ,bool}) => {
  return (
    <div>{test}{functionNeme()}
    <div>
        {bool?'true':'false'}
    </div>
    </div>
  )
}

export default Test