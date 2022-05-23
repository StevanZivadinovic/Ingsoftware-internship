import React, { FC, ReactElement, ReactNode, useEffect, useState } from 'react';
import {
    BrowserRouter
  } from "react-router-dom";
import Header from '../components/Header';

interface typeLayout{
    children:ReactElement,
    getMainThemeApp:(mainThemeApp:boolean)=>void
}


const Layout:FC<typeLayout> =({children, getMainThemeApp}) =>{

    const [mainTheme, setMainTheme] = useState('dark')

    const getTheme = (theme:string) =>{
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