import React, { useEffect, useState } from 'react';
import {
    BrowserRouter
  } from "react-router-dom";
import Header from '../components/Header';




const Layout =({children, getMainThemeApp}) =>{

    const [mainTheme, setMainTheme] = useState('dark')

    const getTheme = (theme) =>{
        setMainTheme(theme)
       
    }   

    useEffect(()=>{

        if(mainTheme=='dark'){
    
            getMainThemeApp(true)
        }else{
            getMainThemeApp(false)
        }
    }, [mainTheme])

    return(
        <>
        <React.Suspense>
        <BrowserRouter>
        <Header getTheme={(theme)=>getTheme(theme)} />
        </BrowserRouter>
        <main className={mainTheme}>{children}</main>
        </React.Suspense>
        </>
    )
}

export default Layout;