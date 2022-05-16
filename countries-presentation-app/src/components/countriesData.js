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
import { NoData } from './NoDataComponent';


export const CountriesData = () => {

    const [dataPrimary, setData] = useState([]);
    const [dataFiltered,setDataFiltered ] = useState([]);
    const [continent, setContinent] = useState('');
    const [inputValue, setInputValue]=useState('');
    const [displaNoData, setDisplayNoData] = useState(false);
    const [wait, setWait] = useState(true);
 
    
    let a = [];
    let filteredSearched = useRef()
    
    useEffect(() => {
        getData().then(res => {
            return res.json()
        }).then(data => {
            setData(data);
           
            setWait(false);
       
                    
                })
            }, []);
            


    const handleDataFiltered = (count)=>{
        setDataFiltered(count);
    }


    const catchContinent =(continent1)=>{
        setContinent(continent1);
        }
    

    const handleWait = (value) => {
        setWait(value)
    }

   const  handleInputValue =(inputV)=>{
    setInputValue(inputV);
   }
    return (
        <div className="mainFiltersAndCard">
            <Filters handleInputValue = {(inputValue)=>{handleInputValue(inputValue)}} dataPrimary={dataPrimary} handleWait={(value) => handleWait(value)} catchContinent={(continent1) => catchContinent(continent1)} handleDataFiltered={(countries)=>{handleDataFiltered(countries)}}></Filters>

            <div className='mainCard'>
                {!wait ? <div className="mainCardContainers">
                    {displaNoData && <div>No data</div>}
                    {dataPrimary.length >0 && dataFiltered.length==0 && inputValue.length==0

                        ?

                        dataPrimary.map(a =>
                            <Cards a={a} key={a.alpha3Code} />
                        )

                        : dataFiltered.length > 0 

                            ?

                            dataFiltered.map(a =>
                                <Cards a={a} key={a.alpha3Code} />

                            )

                            :
                            <NoData></NoData>
                            

                    })
                </div>
                        :<WaitComponent />}
            </div>
        </div>
    )
}