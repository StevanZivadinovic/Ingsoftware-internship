import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { CountriesData } from './components/CountriesData';
import { WaitComponent } from './components/WaitComponent';
import Layout from "./leyout/Leyout";
import DetailsPage from './pages/detailsPage';
import './style/main.css';

const Light = React.lazy(() => import('./leyout/Light'));
const Dark = React.lazy(() => import('./leyout/Dark'));



function App() {

  const [mainThemeApp, setMainThemeApp] = useState('dark');
  const [themeToggler, setThemeToggler] = useState(true);

  const getMainThemeApp = (toggler) =>{
    setThemeToggler(toggler);
  }

  useEffect(() => {
    
  if(!themeToggler){
    setMainThemeApp('light')
  }else if(themeToggler){
    setMainThemeApp('dark')
  }
   
  }, [themeToggler])
  

  return (
    <div className="App">
      <Layout getMainThemeApp={(toggler)=>getMainThemeApp(toggler)}>
   
      <BrowserRouter>
    <React.Suspense fallback={<WaitComponent></WaitComponent>}>
      { mainThemeApp ==='light' && <Light/> }
      {  mainThemeApp ==='dark' && <Dark/>}
      <Routes>
      <Route path='/'  element={ <CountriesData/> } />
      <Route path='/:id' element={<DetailsPage/>} />
      </Routes>
    </React.Suspense>
      </BrowserRouter>
    </Layout>
    </div>
  );
}

export default App;
