import React, { useEffect, useRef, useState } from 'react'
import {useParams, useNavigate } from "react-router-dom";
import {specificCountry, getBorderCountries} from './../components/getData';
import './../style/components/_detailsPage.scss'



const DetailsPage = () => {
    let param = useParams();
    const isMounted = useRef(true);
    const [country, setCountry] = useState({});
    const [borderCountries, setBorderCountries] = useState([]);
    const [fullNameBorderCountries, setFullNameBorderCountries] = useState([])
    const [countries, setCountries] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
      specificCountry(param.id).then(res=>{
        return res.json()
      }).then(data=>{
        if (isMounted.current) {
          setCountry(data);
          setBorderCountries(data[0].borders);
        }
      })
    }, [])
  

  useEffect(() => {
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
  console.log(fullNameBorderCountries);
            

  return (
    <div className='mainDetailsPage'>
      <div className="backButtonMenu">
        <button onClick={()=>{navigate('/')}} className="backButton"> <span><i className="fa-solid fa-arrow-left"></i> </span> Back</button>
      </div>
     {country[0] && <div className="mainContent">
        <div className="bigFlag" style={{backgroundImage:`url(${country[0]?.flag}`}}>
        </div>
        <div className="detailsOfCountry">
          <h2 className="nameCountry">{param.id}</h2>
          <div className="details">
            <div className="detailsLeft">
              <ul>
                <li>Native Name: <span>{country[0]?.nativeName}</span></li>
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
            Border Countries: {fullNameBorderCountries.length>0 ? fullNameBorderCountries.map((a,i)=>{
              // console.log(a)
            return i<= fullNameBorderCountries.length/2-1 && <span key={i}> {a}</span>
            }) : <span>This country has no neighbors</span>}
          </div>
        </div>
      </div>
      }
      </div>
  )
}

export default DetailsPage;