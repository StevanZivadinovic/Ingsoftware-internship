import React, { useEffect, useRef, useState } from 'react'
import {getData} from '../helperFunctions/getData';
import './../style/components/_cards.scss'
import { Filters } from './Filters';
import {
    Link
} from "react-router-dom";


export const CountriesData = () => {

    const [dataPrimary, setData] = useState([]);
    const [dataFiltered,setDataFiltered ] = useState([]);
    const [countrySearched, setCountrySearched]=useState([]);
    const [filteredAndSerached, setFilteredAndSearched] = useState([]);
    const [continent, setContinent] = useState('');
    const [displaNoData, setDisplayNoData] = useState(false);
    
    let a = [];
    let filteredSearched = useRef()
    
    useEffect(() => {
        getData().then(res => {
            return res.json()
        })
            .then(data => {
                    setData(data);
                    filteredSearched.current = data;

            })
    }, []);


    const handleDataPrimary = (count)=>{
        setData([]);
        
        setDataFiltered(count);
    }


    const catchContinent =(continent1)=>{
        setContinent(continent1);
        }
    

    const handleSearchCountry = (searchedCountry, inputValue)=>{

        if(dataFiltered.length>0 && inputValue.length>0){
        
            a= [...filteredSearched.current];
            let b = []
            let d = [];

            a.forEach(c=>{
                
                if(c.name.includes((inputValue).charAt(0).toUpperCase() + (inputValue).slice(1)) && c.region==continent){
                    b.push(c);
                        }
                    })

                    if(continent=='All'){
                     
                        a.forEach(s=>{
                            if(s.name.includes((inputValue).charAt(0).toUpperCase() + (inputValue).slice(1))){
                                d.push(s)
                            }
                        })
                        if(d.length>0){
                            setDisplayNoData(false);
                            setFilteredAndSearched(d);
                        }
                        else{
                            setDisplayNoData(true);
                            setFilteredAndSearched([]);
                        }
                    }else{

                        if(b.length>0){
                            setDisplayNoData(false);
                            setFilteredAndSearched(b);
                        }
                        else{
                            setDisplayNoData(true);
                            setFilteredAndSearched([]);
                        }
                    }
                

        }
        
        else if(inputValue.length==0){

             setFilteredAndSearched([]);
             if(filteredAndSerached){

                 setFilteredAndSearched(searchedCountry);
             }else{
                setCountrySearched(searchedCountry);
             }
            }
        else{
            setCountrySearched(searchedCountry);

        }
       
     
    }

 

    return (
        <div className="mainFiltersAndCard">
            <Filters catchContinent={(continent1)=>catchContinent(continent1)} handleDataPrimary={(count)=>handleDataPrimary(count)} handleSearchCountry={(searchedCountry, inputValue, continent)=>handleSearchCountry(searchedCountry, inputValue, continent)}></Filters>
           
            <div className='mainCard'>
                <div className="mainCardContainers">
                {displaNoData && <div>No data</div>}
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
                    
                    : dataFiltered.length> 0 && filteredAndSerached.length==0 && countrySearched.length==0 && !displaNoData

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
                            filteredAndSerached.length>0
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