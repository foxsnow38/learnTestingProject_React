import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count,setCount] =useState(0)
  return (
    <div>
        <button onClick={()=> setCount(count+1)}>+</button>  <button onClick={()=> setCount(count-1)}>-</button>

        <br />
        <br />
        <p>
            {count}
        </p>
    </div>
  )
}

export default Counter