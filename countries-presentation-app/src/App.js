
import { CountriesData } from './components/countriesData';
import Header from './components/header';
import DetailsPage from './pages/detailsPage'
import './style/main.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
      <Route path='/'   element={<CountriesData />} />
      <Route path='/:id' element={<DetailsPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
