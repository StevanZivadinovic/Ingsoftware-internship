import React, { useEffect, useRef, useState } from 'react'
import  getData   from './getData';
import './../style/components/_cards.scss'
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
    <div className='mainCard'>
        <div className="mainCardContainers">
        { dataPrimary.map(a=> <div className='card' id='card' key={a.alpha3Code}>
            <div className="img" style={{backgroundImage:`url(${a.flag})`}}>
            {/* <img src={a.flag} alt="flag" width={'100%'}/> */}
            </div>
            <div className="cardText">
            <h3 className='cardName'>{a.name}</h3>
            <div className="cardDetails">
                <p>Population: <span>{a.population}</span></p>
                <p>Region: <span>{a.region}</span></p>
                <p>Capital: <span>{a.capital}</span></p>
            </div>
            </div>
        </div>) }
        </div>
        </div>
  )
}
