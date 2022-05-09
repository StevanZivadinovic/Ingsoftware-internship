import { useEffect, useState } from 'react';
import { getRegion } from '../helperFunctions/getData';
import './../style/components/_filters.scss';

export const Filters = ({handleDataPrimary, handleSearchCountry}) => {
const [displayRegion, setdisplayRegion] = useState(false);
const [selectedCountry, setCountry] = useState('');
const [searchedCountry, setSearchedCountry]= useState('');

window.addEventListener('click',e=>{
  if(e.target.className  !=='toggleUl' && e.target.className  !=='filterByRegion'){
    setdisplayRegion(false);
  }
})
const handleCountry = (e)=>{
  if(e.target.classList=='countryLI'){
    setCountry((e.target.innerText).toLowerCase())
  }
}

useEffect(() => {
  if(selectedCountry.length>0){

    getRegion(selectedCountry)
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      handleDataPrimary(data);
    })
  }
}, [selectedCountry])

const handleSearchCountryFilter = (data) =>{

  handleSearchCountry(data)
}
  return (
    <div className='mainFilters'>
        <div className="mainContent">
            <div className="searchInput">
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <input type="search" name="search" id="searchInput" placeholder='Search for a country...' onChange={(e)=>handleSearchCountryFilter(e.target.value)} />
            </div>

            <div className="selectSearch" onClick={(e)=>{handleCountry(e)}}>

                <p className='toggleUl' onClick={()=>setdisplayRegion(!displayRegion)}><span>Filter by Region</span> <span>{!displayRegion ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}</span></p>
               {displayRegion && <ul className='filterByRegion'>
                    <li className='countryLI' onClick={()=>{setdisplayRegion(false)}}>Africa</li>
                    <li className='countryLI'  onClick={()=>{setdisplayRegion(false)}}>Americas</li>
                    <li className='countryLI' onClick={()=>{setdisplayRegion(false)}}>Asia</li>
                    <li className='countryLI' onClick={()=>{setdisplayRegion(false)}}>Europe</li>
                    <li className='countryLI' onClick={()=>{setdisplayRegion(false)}}>Oceania</li>
                </ul> }
            </div>
        </div>
    </div>
  )
}