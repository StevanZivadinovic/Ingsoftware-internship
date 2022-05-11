import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Header from '../components/Header';



const Layout =({children}) =>{
    return(
        <>
        <div>
        <BrowserRouter>
        <Header />
        </BrowserRouter>
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;