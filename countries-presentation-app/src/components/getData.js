
const getData = () => {
    return fetch('https://restcountries.com/v2/all')
}


const specificCountry = (name) =>{
    return fetch(`https://restcountries.com/v2/name/${name}`)
}

export {getData, specificCountry};