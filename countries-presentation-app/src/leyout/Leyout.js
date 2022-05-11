import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Header from '../components/Header';



const Layout =({children}) =>{

    const [mainTheme, setMainTheme] = useState('light')

    const getTheme = (theme) =>{
        console.log(theme)
        setMainTheme(theme)
    }   

    return(
        <>
      
        <BrowserRouter>
        <Header getTheme={(theme)=>getTheme(theme)} />
        </BrowserRouter>
      
        <main className={mainTheme}>{children}</main>
        </>
    )
}

export default Layout;