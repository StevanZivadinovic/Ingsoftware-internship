import React, { useEffect, useState } from 'react'
import {useParams, useNavigate, Link } from "react-router-dom";
import {specificCountry, getBorderCountries} from '../helperFunctions/getData';
import './../style/components/_detailsPage.scss'



const DetailsPage = () => {

  interface MyObjLayout {
    0: {
      code:string,
      name:string
    },
}

  interface User {
    flag:string,
    nativeName:string,
    population:number,
    region:string,
    subregion:string,
    capital:string,
    topLevelDomain:string,
    currencies:MyObjLayout,
    languages:MyObjLayout,
  
   
  };


  



    let param = useParams();
    const [country, setCountry] = useState<User>();
    const [borderCountries, setBorderCountries] = useState([]);
    const [fullNameBorderCountries, setFullNameBorderCountries] = useState<Array<string>>([]);

    const navigate = useNavigate()

    useEffect(() => {
      specificCountry(param.id).then(res=>{
        return res.json()
      }).then(data=>{
   
          setCountry(data[0]); 
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
     {country && <div className="mainContent">
        <div className="bigFlag" style={{backgroundImage:`url(${country.flag}`}}>
        </div>
        <div className="detailsOfCountry">
          <h2 className="nameCountry">{param.id}</h2>
          <div className="details">
            <div className="detailsLeft">
              <ul>
                <li className='detailsLI'>Native Name: <span>{country?.nativeName}</span></li>
                <li>Population: <span>{country?.population}</span></li>
                <li>Region: <span>{country?.region}</span></li>
                <li>Sub Region: <span>{country?.subregion}</span></li>
                <li>Capital: <span>{country?.capital}</span></li>
              </ul>
            </div>
            <div className="detailsRight">
              <ul>
                <li>Top Level Domain: <span>{country?.topLevelDomain[0]}</span></li>
                <li>Currencies: <span>{country?.currencies[0].code}</span></li>
                <li>Languages: <span>{country?.languages[0].name}</span></li>
              </ul>
            </div> 
          </div>
          <div className="borderCountry">
            <span>Border Countries: </span><div className='linksBorderCountry'>{fullNameBorderCountries.length>0 ? fullNameBorderCountries.map((a:string,i)=>{
           console.log(a);
           return  <Link  to={`/${a}`} key={i}>{a}</Link>
            }) : <span>This country has no neighbors</span>}</div>
          </div>
        </div>
      </div>
      }
     
      </div>
  )
}

export default DetailsPage;