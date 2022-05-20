import React, { FC, useEffect, useRef, useState } from 'react';
import { debounce } from '../helperFunctions/debounce';
import { getCountyByName, getRegion, getData } from '../helperFunctions/getData';

import './../style/components/_filters.scss';

type FiltersProps ={
  dataPrimary:{}[],
  handleDataFiltered:(countries:string[])=>void,
  handleInputValue:(searchedCountry:string) => void,
  catchContinent:(continent:string)=>void,
  handleWait:(wait:boolean)=>void
}

export const Filters:FC<FiltersProps> = ({dataPrimary, handleDataFiltered, handleInputValue, catchContinent, handleWait}) => {

const [displayRegion, setdisplayRegion] = useState(false);
const [selectedCountry, setCountry] = useState('');
const [searchedCountry, setSearchedCountry]= useState('');
const [arrayOfFilterContinents, setArrayOfFilterContinents] = useState(['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']);
const [LiName, setLiName]=useState('');
const inputelement = useRef(null);

let a :any[] = [];
let b :any[]= [];
let filteredSearched = useRef([{}])

useEffect(()=>{
  filteredSearched.current = dataPrimary;

},[dataPrimary])


window.addEventListener('click',e=>{
  const target = e.target as HTMLTextAreaElement;
  if(target.className  !=='toggleUl' && target.className  !=='filterByRegion'){
    setdisplayRegion(false);
  }
})
//:React.MouseEvent
const handleCountry = (e:any)=>{
  const target = e.target as HTMLTextAreaElement;
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


  }else{
   b= a.filter(c=>{
      return c.name.includes((searchedCountry).charAt(0).toUpperCase() + (searchedCountry).slice(1));
    })
    handleDataFiltered(b);
 

  }


},[selectedCountry, searchedCountry])

const displayRegionFunc = (e:any)=>{
  setdisplayRegion(false);
  setLiName(e.target.innerText)
}

  return (
    <div className='mainFilters'>
        <div className="mainContent">
            <div className="searchInput">
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <input ref={inputelement}  type="search" name="search" id="searchInput" placeholder='Search for a country...' onChange={debounce((e:any)=>setSearchedCountry(e.target.value), 500)}/>
            </div>

            <div className="selectSearch" onClick={(e)=>{handleCountry(e)}}>

                <p className='toggleUl' onClick={()=>setdisplayRegion(!displayRegion)}><span>{LiName.length==0 ?'Filter by Region' : LiName}</span> <span>{!displayRegion ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}</span></p>
               {displayRegion && <ul className='filterByRegion'>
               {arrayOfFilterContinents.map(a=>{

                  return   <li className='countryLI' key={a} onClick={(e)=>{displayRegionFunc(e)}}>{a}</li>
               })}
               
                </ul> }
            </div>
        </div>
    </div>
  )
}