import React, { useEffect, useState } from 'react'
import {useParams, useNavigate, Link, Routes, Route, BrowserRouter  } from "react-router-dom";
import {specificCountry, getBorderCountries} from '../helperFunctions/getData';
import './../style/components/_detailsPage.scss'



const DetailsPage = () => {
    let param = useParams();
    const [country, setCountry] = useState({});
    const [borderCountries, setBorderCountries] = useState([]);
    const [fullNameBorderCountries, setFullNameBorderCountries] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
      specificCountry(param.id).then(res=>{
        return res.json()
      }).then(data=>{
   
          setCountry(data); 
          setBorderCountries(data[0].borders);
     
      })
    }, [param.id])
  

  useEffect(() => {
    setFullNameBorderCountries([])
    borderCountries && borderCountries.forEach(a => {
      getBorderCountries(a)
        .then(res => {
          return res.json()
        })
        .then((data) => {   
            setFullNameBorderCountries((fullNameBorderCountries) => [...fullNameBorderCountries, data.name])
        })
    }); 
  }, [borderCountries]);
            

  return (
    <div className='mainDetailsPage'>
      <div className="backButtonMenu">
        <button onClick={()=>{navigate(-1)}} className="backButton"> <span><i className="fa-solid fa-arrow-left"></i> </span> Back</button>
      </div>
     {country[0] && <div className="mainContent">
        <div className="bigFlag" style={{backgroundImage:`url(${country[0].flag}`}}>
        </div>
        <div className="detailsOfCountry">
          <h2 className="nameCountry">{param.id}</h2>
          <div className="details">
            <div className="detailsLeft">
              <ul>
                <li className='detailsLI'>Native Name: <span>{country[0]?.nativeName}</span></li>
                <li>Population: <span>{country[0]?.population}</span></li>
                <li>Region: <span>{country[0]?.region}</span></li>
                <li>Sub Region: <span>{country[0]?.subregion}</span></li>
                <li>Capital: <span>{country[0]?.capital}</span></li>
              </ul>
            </div>
            <div className="detailsRight">
              <ul>
                <li>Top Level Domain: <span>{country[0]?.topLevelDomain[0]}</span></li>
                <li>Currencies: <span>{country[0]?.currencies[0].code}</span></li>
                <li>Languages: <span>{country[0]?.languages[0].name}</span></li>
              </ul>
            </div> 
          </div>
          <div className="borderCountry">
            <span>Border Countries: </span><div className='linksBorderCountry'>{fullNameBorderCountries.length>0 ? fullNameBorderCountries.map((a,i)=>{
            return  <Link to={`/${a}`} key={i}> {a}</Link>
            }) : <span>This country has no neighbors</span>}</div>
          </div>
        </div>
      </div>
      }
     
      </div>
  )
}

export default DetailsPage;