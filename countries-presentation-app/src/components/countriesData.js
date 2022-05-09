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
    const [filteredAndSerached, setFilteredAndSearched] = useState([]);
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
    
    const handleSearchCountry = (searchedCountry, inputValue)=>{
        // console.log(searchedCountry);
       
        if(dataFiltered.length>0 && inputValue.length>0){
            a=[...dataFiltered];
         a.filter(c=>{
                return c.name.includes((inputValue).charAt(0).toUpperCase() + (inputValue).slice(1))
            })
          
            setDataFiltered([]);
            setData([]);
            setFilteredAndSearched(a)
        }else{

            setCountrySearched(searchedCountry);
        }
       
     
    }

    return (
        <div className="mainFiltersAndCard">
            <Filters handleDataPrimary={(count)=>handleDataPrimary(count)} handleSearchCountry={(searchedCountry, inputValue)=>handleSearchCountry(searchedCountry, inputValue)}></Filters>
           
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

                        : countrySearched.length>0
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
                            setFilteredAndSearched.length>0
                            ?
                            filteredAndSerached.map(a => 
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