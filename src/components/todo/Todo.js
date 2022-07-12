import React, { createRef, useState } from 'react'
const defaultItems = [{name:`item 2`},{name:"item 3"}]

function Todo() {
    const [text,setText] =useState(``)
    const [items,setItem]= useState(defaultItems)
   
  
  return (
    <div>
<input title='Inputte' name='textInput' value={text} onChange={(e)=>setText(e.target.value)} />
<button onClick={ ()=> {setItem([...items,{name:text}]); setText(``)}}>Add</button>
<br /><br />
<ul>
{items.map((item,key)=>(<li key={key}>{item.name}</li>))}
</ul>
    </div>
  )
}

export default Todo