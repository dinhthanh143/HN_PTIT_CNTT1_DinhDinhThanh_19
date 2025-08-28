import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'
type childrenType ={
    children: (props: {
      theme: string,
      toggleTheme: ()=>void  
    })=> React.ReactNode 
}


export const ThemeProvider:React.FC<childrenType> = ({children}) => {
    const [theme, setTheme] = useState("light")
    const toggleTheme = ()=>{
        setTheme(prev => prev === "light" ? "dark": "light")
    }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children({theme, toggleTheme})}
    </ThemeContext.Provider>
  )
}
