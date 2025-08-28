import React, { useContext } from 'react'
// import { ThemeProvider } from './ThemeProvider'
import { ThemeContext } from './ThemeContext'
export const Content = () => {
  const context = useContext(ThemeContext)
  if(!context) return null
  const { theme, toggleTheme} = context
  return (
    <div style={{alignContent:"center", justifyContent:"center", border:"none", boxShadow:"none"}}>
        <button onClick={toggleTheme}  style={{borderRadius:"3px", backgroundColor:"black", color:"white", width:"80%"}} >Toggle theme</button>
        <span style={{color: theme !== "dark"? "black": "white" }}>Grow a garden</span>
        <span style={{color: theme !== "dark"? "black": "white" }}>Them hien tai:{}</span>
    </div>
  )
}
