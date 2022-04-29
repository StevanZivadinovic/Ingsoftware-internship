import React, { useEffect, useRef, useState } from 'react'

export const GetData = () => {

    const [dataPrimary, setData] = useState([]);
    const isMounted = useRef(true);

    useEffect(() => {
    fetch('https://restcountries.com/v2/all')
    .then(data=>{
        return data.json()
    })
    .then(data=>{

        if (isMounted.current) {
            data.forEach(a => {
                console.log(a);
             setData(dataPrimary => [...dataPrimary, a] );
            });
            isMounted.current = false;
            return
        }
        
    })
    }, [])

  return (
    <div className='mainCardContainers'>
        { dataPrimary.map(a=>{
            return <p key={a.alpha3Code}>{a.name}</p>
    }) }</div>
  )
}
