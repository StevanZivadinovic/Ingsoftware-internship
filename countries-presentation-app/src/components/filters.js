import { useState } from 'react';
import './../style/components/_filters.scss';

export const Filters = () => {
const [displayRegion, setdisplayRegion] = useState(false);

window.addEventListener('click',e=>{
  if(e.target.className  !=='toggleUl' && e.target.className  !=='filterByRegion'){
    setdisplayRegion(false);
  }
})

  return (
    <div className='mainFilters'>
        <div className="mainContent">
            <div className="searchInput">
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <input type="search" name="search" id="searchInput" placeholder='Search for a country...' />
            </div>

            <div className="selectSearch">

                <p className='toggleUl' onClick={()=>setdisplayRegion(!displayRegion)}><span>Filter by Region</span> <span>{!displayRegion ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}</span></p>
               {displayRegion && <ul className='filterByRegion'>
                    <li>Africa</li>
                    <li>America</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>Oceania</li>
                </ul> }
            </div>
        </div>
    </div>
  )
}
