import React, { useEffect, useRef, useState } from 'react'

export const Ex3 = () => {
    const [value,setValue] = useState("")
    const count = useRef(0)
    useEffect(()=>{
     count.current += 1   
    })
  return (
    <div>
        <span>Component render counter</span>
        <input type="text" onChange={(e)=>setValue(e.target.value)}/>
        <span>So lan render: {count.current}</span>
    </div>
  )
}
