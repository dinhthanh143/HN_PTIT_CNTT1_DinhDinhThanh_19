import React from 'react'
import { Header } from './Header'
import { Content } from './Content'
import { ThemeProvider } from './ThemeProvider'
export const Main = () => {
  return (
    <ThemeProvider>
      {({theme})=>(
        <div style={{alignContent:"center", justifyContent:"center", backgroundColor: theme === "dark" ? "black" : "white"  }}>
            <Header/>
            <Content/>
        </div>
      )}  
    </ThemeProvider>
     
  )
}
