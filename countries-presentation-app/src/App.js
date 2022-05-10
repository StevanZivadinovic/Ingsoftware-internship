import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { CountriesData } from './components/CountriesData';
import Header from './components/Header';
import DetailsPage from './pages/detailsPage'

import './style/main.css';


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/'  element={ <CountriesData/> } />
      <Route path='/:id' element={<DetailsPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
