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
                // console.log(a);
             setData(dataPrimary => [...dataPrimary, a] );
            });
            isMounted.current = false;
            return
        }
        
    })
    }, [])
        console.log(dataPrimary)
  return (
    <div className='mainCardContainers'>
        dd
        { dataPrimary.map(a=>{
            return <p>{a.name}</p>
    })}</div>
  )
}
