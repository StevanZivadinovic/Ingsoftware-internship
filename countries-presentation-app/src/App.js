
import { CountriesData } from './components/countriesData';
import { Filters } from './components/filters';
import Header from './components/header';
import './style/main.css'
function App() {
  return (
    <div className="App">
      <Header />
      <Filters/>
      <CountriesData />
    </div>
  );
}

export default App;
