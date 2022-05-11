import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Header from '../components/Header';



const Layout =({children}) =>{

    const getTheme = (theme) =>{
        console.log(theme)
    }   

    return(
        <>
        <div>
        <BrowserRouter>
        <Header getTheme={(theme)=>getTheme(theme)} />
        </BrowserRouter>
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;