import React, { useEffect, useRef, useState } from 'react'
import {getData, getRegion} from '../helperFunctions/getData';
import './../style/components/_cards.scss'
import { Filters } from './Filters';
import {
    Link
} from "react-router-dom";


export const CountriesData = () => {

    const [dataPrimary, setData] = useState([]);
    const [dataFiltered,setDataFiltered ] = useState([]);
    const isMounted = useRef(true);
    const [countrySearched, setCountrySearched]=useState([]);
    let a = [];
    
    useEffect(() => {
        getData().then(res => {
            return res.json()
        })
            .then(data => {
                    setData(data);

            })
    }, []);

    const handleDataPrimary = (count)=>{
        setData([]);
        setDataFiltered(count);
    }
    
    const handleSearchCountry = (searchedCountry)=>{
        // console.log(searchedCountry);
       
        if(dataFiltered.length>0){
          a =   dataFiltered.filter(a=>{
                return a.name.includes(('serbia').charAt(0).toUpperCase() + ('serbia').slice(1))
            })
          
            setDataFiltered([])
            setCountrySearched(a);
        }else{

            setCountrySearched(searchedCountry);
        }
     
    }

    return (
        <div className="mainFiltersAndCard">
            <Filters handleDataPrimary={(count)=>handleDataPrimary(count)} handleSearchCountry={(searchedCountry)=>handleSearchCountry(searchedCountry)}></Filters>
           
            <div className='mainCard'>
                <div className="mainCardContainers">
                    
                    {dataFiltered.length<=0 && countrySearched.length <=0

                     ?

                     dataPrimary.map(a => 
                    <Link to={a.name} key={a.alpha3Code}>
                    <div className='card' id='card' key={a.alpha3Code}>
                        <div className="img" style={{ backgroundImage: `url(${a.flag})` }}>
                        </div>
                        <div className="cardText">
                            <h3 className='cardName'>{a.name}</h3>
                            <div className="cardDetails">
                                <p>Population: <span>{a.population}</span></p>
                                <p>Region: <span>{a.region}</span></p>
                                <p>Capital: <span>{a.capital}</span></p>
                            </div>
                        </div>
                    </div>
                    </Link>
                    )
                    
                    : dataFiltered.length> 0

                    ?
                    
                    dataFiltered.map(a => 
                        <Link to={a.name} key={a.alpha3Code}>
                        <div className='card' id='card' key={a.alpha3Code}>
                            <div className="img" style={{ backgroundImage: `url(${a.flag})` }}>
                            </div>
                            <div className="cardText">
                                <h3 className='cardName'>{a.name}</h3>
                                <div className="cardDetails">
                                    <p>Population: <span>{a.population}</span></p>
                                    <p>Region: <span>{a.region}</span></p>
                                    <p>Capital: <span>{a.capital}</span></p>
                                </div>
                            </div>
                        </div>
                        </Link>
                        
                        )

                        : countrySearched
                        ?
                        
                       
                        countrySearched.map(a => 
                            <Link to={a.name} key={a.alpha3Code}>
                            <div className='card' id='card' key={a.alpha3Code}>
                                <div className="img" style={{ backgroundImage: `url(${a.flag})` }}>
                                </div>
                                <div className="cardText">
                                    <h3 className='cardName'>{a.name}</h3>
                                    <div className="cardDetails">
                                        <p>Population: <span>{a.population}</span></p>
                                        <p>Region: <span>{a.region}</span></p>
                                        <p>Capital: <span>{a.capital}</span></p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            
                            )
                            :
                            ''
                        
                     
                    }
                </div>
            </div>
        </div>
    )
}
