import React, { useEffect, useState } from 'react'

export const GetData = () => {

    const [dataPrimary, setData] = useState([])

    useEffect(() => {
    fetch('https://restcountries.com/v2/all')
    .then(data=>{
        return data.json()
    })
    .then(data=>{
        data.forEach(a => {
            // console.log(a);
         setData(dataPrimary => [...dataPrimary, a] );
        });
    })
    }, [])
        console.log(dataPrimary)
  return (
    <div className='mainCardContainers'>
        
        {dataPrimary ? dataPrimary.map(a=>{
        <p>{a.name}</p>
    }):''}</div>
  )
}
