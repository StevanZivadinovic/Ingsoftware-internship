import React, { useEffect, useRef, useState } from 'react'
import  getData   from './getData';
import './../style/components/cards.scss'
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
    console.log(dataPrimary)
  return (
    <div className='mainCardContainers'>
        { dataPrimary.map(a=> <div className='card' key={a.alpha3Code}>
            <img src={a.flag} alt="flag" width={'100px'}/>
            <div className="cardText">
            {a.name}
            </div>
        </div>) }
        </div>
  )
}
