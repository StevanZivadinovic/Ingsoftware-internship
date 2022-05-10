import { useEffect, useRef, useState } from 'react';
import { debounce } from '../helperFunctions/debounce';
import { getCountyByName, getRegion, getData } from '../helperFunctions/getData';
import './../style/components/_filters.scss';

export const Filters = ({handleDataPrimary, handleSearchCountry, catchContinent}) => {
const [displayRegion, setdisplayRegion] = useState(false);
const [selectedCountry, setCountry] = useState('');
const [searchedCountry, setSearchedCountry]= useState('');
const inputelement = useRef(null);
window.addEventListener('click',e=>{
  if(e.target.className  !=='toggleUl' && e.target.className  !=='filterByRegion'){
    setdisplayRegion(false);
  }
})
const handleCountry = (e)=>{
  if(e.target.classList=='countryLI'){
    catchContinent(e.target.innerText)
    setCountry((e.target.innerText).toLowerCase())
  }
}

useEffect(() => {
  if(selectedCountry.length>0){
    if(selectedCountry!=='all'){

      getRegion(selectedCountry)
      .then(res=>{
        return res.json()
      })
      .then(data=>{
        handleDataPrimary(data);
      })
    }else{
      getData()
      .then(res=>{
        return res.json()
      })
      .then(data=>{
        handleDataPrimary(data);
      })
    }
  }
}, [selectedCountry]);

useEffect(()=>{
  
  searchedCountry && getCountyByName(searchedCountry)
         .then(res=>{
           return res.json()
         })
         .then(data=>{
       
           handleSearchCountry(data, searchedCountry);
         })
         .catch(err=>{
           console.log(err);
         })
  if(!searchedCountry){
    handleSearchCountry('', '');
  }
  
}, [searchedCountry]);

useEffect(()=>{
  console.log(inputelement.current.value);
},[])




  return (
    <div className='mainFilters'>
        <div className="mainContent">
            <div className="searchInput">
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <input ref={inputelement}  type="search" name="search" id="searchInput" placeholder='Search for a country...' onChange={debounce((e)=>setSearchedCountry(e.target.value), 500)} />
            </div>

            <div className="selectSearch" onClick={(e)=>{handleCountry(e)}}>

                <p className='toggleUl' onClick={()=>setdisplayRegion(!displayRegion)}><span>Filter by Region</span> <span>{!displayRegion ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}</span></p>
               {displayRegion && <ul className='filterByRegion'>
                    <li className='countryLI' onClick={()=>{setdisplayRegion(false)}}>All</li>
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