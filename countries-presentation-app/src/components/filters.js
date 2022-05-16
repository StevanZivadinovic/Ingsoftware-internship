import { useEffect, useRef, useState } from 'react';
import { debounce } from '../helperFunctions/debounce';
import { getCountyByName, getRegion, getData } from '../helperFunctions/getData';

import './../style/components/_filters.scss';

export const Filters = ({dataPrimary, handleDataFiltered, handleInputValue, catchContinent, handleWait}) => {

const [displayRegion, setdisplayRegion] = useState(false);
const [selectedCountry, setCountry] = useState('');
const [searchedCountry, setSearchedCountry]= useState('');
const [arrayOfFilterContinents, setArrayOfFilterContinents] = useState(['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'])
const inputelement = useRef(null);

let a = [];
let b = [];
let filteredSearched = useRef()

useEffect(()=>{
  filteredSearched.current = dataPrimary;

},[dataPrimary])


window.addEventListener('click',e=>{
  if(e.target.className  !=='toggleUl' && e.target.className  !=='filterByRegion'){
    setdisplayRegion(false);
  }
})
const handleCountry = (e)=>{
  if(e.target.classList=='countryLI'){
    catchContinent(e.target.innerText)
    setCountry((e.target.innerText).toLowerCase());
    handleWait(false);
  }
}
useEffect(()=>{
  handleInputValue(searchedCountry)
  if(filteredSearched.current) a=[...filteredSearched.current];
  if(selectedCountry.length>0){

    if(selectedCountry!=='all'){
      b=  a.filter(c=>{
        
        return c.name.includes((searchedCountry).charAt(0).toUpperCase() + (searchedCountry).slice(1)) && (c.region).charAt(0).toLowerCase() + (c.region).slice(1) == selectedCountry;
      })
    }else{
      b=  a.filter(c=>{
        
        return c.name.includes((searchedCountry).charAt(0).toUpperCase() + (searchedCountry).slice(1))
      })
    }
      
    handleDataFiltered(b);
    console.log(selectedCountry, searchedCountry, b);

  }else{
   b= a.filter(c=>{
      return c.name.includes((searchedCountry).charAt(0).toUpperCase() + (searchedCountry).slice(1));
    })
    handleDataFiltered(b);
    console.log(b, a, filteredSearched.current);

  }



},[selectedCountry, searchedCountry])







  return (
    <div className='mainFilters'>
        <div className="mainContent">
            <div className="searchInput">
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <input ref={inputelement}  type="search" name="search" id="searchInput" placeholder='Search for a country...' onChange={debounce((e)=>setSearchedCountry(e.target.value), 500)}/>
            </div>

            <div className="selectSearch" onClick={(e)=>{handleCountry(e)}}>

                <p className='toggleUl' onClick={()=>setdisplayRegion(!displayRegion)}><span>Filter by Region</span> <span>{!displayRegion ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}</span></p>
               {displayRegion && <ul className='filterByRegion'>
               {arrayOfFilterContinents.map(a=>{

                  return   <li className='countryLI' key={a} onClick={()=>{setdisplayRegion(false)}}>{a}</li>
               })}
               
                </ul> }
            </div>
        </div>
    </div>
  )
}