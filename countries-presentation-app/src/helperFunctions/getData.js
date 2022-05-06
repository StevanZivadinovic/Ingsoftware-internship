
const getDataURL = 'https://restcountries.com/v2'

const getData = () => fetch(`${getDataURL}/all`)

const specificCountry = (name) =>  fetch(`${getDataURL}/name/${name}`);

const getBorderCountries = (attr)=> fetch(`${getDataURL}/alpha/${attr}`);

const getRegion = (region)=>fetch(`${getDataURL}/region/${region}`);

export {getData, specificCountry, getBorderCountries, getRegion} ;