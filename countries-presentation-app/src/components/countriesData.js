import React, { useEffect, useRef, useState } from 'react'
import  getData   from './getData';

export const CountriesData = () => {

    const [dataPrimary, setData] = useState([]);
    const isMounted = useRef(true);

    useEffect(() => {
        getData().then(res=>{
            return res.json()
        })
        .then(data=>{
            if (isMounted.current) {
            setData(data)
            }
            
        })
    }, []); 

  return (
    <div className='mainCardContainers'>
        { dataPrimary.map(a=> <p key={a.alpha3Code}>{a.name}</p>) }
        </div>
  )
}
