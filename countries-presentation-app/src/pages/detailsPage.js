import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route, useParams } from "react-router-dom";
import {specificCountry} from './../components/getData';
import './../style/components/_detailsPage.scss'





const DetailsPage = () => {
    let param = useParams();
    const isMounted = useRef(true);
    const [country, setCountry] = useState({})

    useEffect(() => {
      specificCountry(param.id).then(res=>{
        return res.json()
      }).then(data=>{
        if (isMounted.current) {
          setCountry(data);
        }
      })
     
    }, [])
    
   console.log(country)
  return (
    <div className='mainDetailsPage'>
      <div className="backButtonMenu">
        <button className="backButton"> <span><i className="fa-solid fa-arrow-left"></i> </span> Back</button>
      </div>
     {country ? <div className="mainContent">
        <div className="bigFlag">
          <img src={country[0].flag} alt='big flag'  />
        </div>
        <div className="detailsOfCountry">
          <h2 className="nameCountry">{param.id}</h2>
          <div className="details">
            <div className="detailsLeft">
              <ul>
                <li>Native Name: <span></span></li>
                <li>Population: <span></span></li>
                <li>Region: <span></span></li>
                <li>Sub Region: <span></span></li>
                <li>Capital: <span></span></li>
              </ul>
            </div>
            <div className="detailsRight">
              <ul>
                <li>Top Level Domain <span></span></li>
                <li>Currencies: <span></span></li>
                <li>Languages: <span></span></li>
              </ul>
            </div>
          </div>
          <div className="borderCountry">
            Border Countries: <span>Zemlje..</span>
          </div>
        </div>
      </div>
     :''}
      </div>
  )
}

export default DetailsPage;