import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { CountriesData } from './components/CountriesData';
import Header from './components/Header';
import Layout from "./leyout/Leyout";
import DetailsPage from './pages/detailsPage'

import './style/main.css';


function App() {
 
  return (
    <Layout>
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path='/'  element={ <CountriesData/> } />
      <Route path='/:id' element={<DetailsPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
    </Layout>
  );
}

export default App;
