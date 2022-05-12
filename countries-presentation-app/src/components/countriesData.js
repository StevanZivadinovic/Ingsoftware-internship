import React, { useEffect, useRef, useState } from 'react'
import {getData} from '../helperFunctions/getData';
import './../style/components/_cards.scss'
import { Filters } from './Filters';
import {
    useNavigate,
    useLocation
} from "react-router-dom";
import {WaitComponent} from './../components/WaitComponent'
import Cards from './Cards';


export const CountriesData = () => {

    const [dataPrimary, setData] = useState([]);
    const [dataFiltered,setDataFiltered ] = useState([]);
    const [countrySearched, setCountrySearched]=useState([]);
    const [filteredAndSerached, setFilteredAndSearched] = useState([]);
    const [continent, setContinent] = useState('');
    const [displaNoData, setDisplayNoData] = useState(false);
    const [wait, setWait] = useState(false);
 
    const navigate = useNavigate();
    const location = useLocation();

    
    let a = [];
    let filteredSearched = useRef()
    
    useEffect(() => {
        getData().then(res => {
            return res.json()
        }).then(data => {
            setData(data);
            filteredSearched.current = data;
            setWait(true);
            console.log(location)
                    
                })
            }, []);
            


    const handleDataPrimary = (count)=>{
        setData([]);
        
        setDataFiltered(count);
    }


    const catchContinent =(continent1)=>{
        setContinent(continent1);
        }
    

    const handleSearchCountry = (searchedCountry, inputValue) => {

        if (dataFiltered.length > 0 && inputValue.length > 0) {

            a = [...filteredSearched.current];
            let b = []
            let d = [];

            a.forEach(c => {

                if (c.name.includes((inputValue).charAt(0).toUpperCase() + (inputValue).slice(1)) && c.region == continent) {
                    b.push(c);
                }
            })

            if (continent == 'All') {

                a.forEach(s => {
                    if (s.name.includes((inputValue).charAt(0).toUpperCase() + (inputValue).slice(1))) {
                        d.push(s)
                    }
                })
                if (d.length > 0) {
                    setDisplayNoData(false);
                    setFilteredAndSearched(d);
                }
                else {
                    setDisplayNoData(true);
                    setFilteredAndSearched([]);
                }
            } else {

                if (b.length > 0) {
                    setDisplayNoData(false);
                    setFilteredAndSearched(b);
                }
                else {
                    setDisplayNoData(true);
                    setFilteredAndSearched([]);
                }
            }


        }

        else if (inputValue.length == 0) {

            setFilteredAndSearched([]);
            if (filteredAndSerached) {

                setFilteredAndSearched(searchedCountry);
            } else {
                setCountrySearched(searchedCountry);
            }
        }
        else {
            setCountrySearched(searchedCountry);

        }


    }

    const handleWait = (value) => {
        setWait(value)
    }



    return (
        <div className="mainFiltersAndCard">
            <Filters handleWait={(value) => handleWait(value)} catchContinent={(continent1) => catchContinent(continent1)} handleDataPrimary={(count) => handleDataPrimary(count)} handleSearchCountry={(searchedCountry, inputValue, continent) => handleSearchCountry(searchedCountry, inputValue, continent)}></Filters>

            <div className='mainCard'>
                {wait ? <div className="mainCardContainers">
                    {displaNoData && <div>No data</div>}
                    {dataFiltered.length <= 0 && countrySearched.length <= 0

                        ?

                        dataPrimary.map(a =>
                            <Cards a={a} key={a.alpha3Code} />
                        )

                        : dataFiltered.length > 0 && filteredAndSerached.length == 0 && countrySearched.length == 0 && !displaNoData

                            ?

                            dataFiltered.map(a =>
                                <Cards a={a} key={a.alpha3Code} />

                            )

                            : countrySearched.length > 0
                                ?

                                countrySearched.map(a =>
                                    <Cards a={a} key={a.alpha3Code} />

                                )
                                :
                                filteredAndSerached.length > 0
                                    ?
                                    filteredAndSerached.map(a =>
                                        <Cards a={a} key={a.alpha3Code} />

                                    )
                                    :
                                    ''

                    })
                </div>
                    : <WaitComponent />}
            </div>
        </div>
    )
}