
const getDataURL = 'https://restcountries.com/v2'

const getData = () => fetch(`${getDataURL}/all`)

const specificCountry = (name:string|undefined) =>  fetch(`${getDataURL}/name/${name}`);

const getBorderCountries = (attr:string)=> fetch(`${getDataURL}/alpha/${attr}`);

const getRegion = (region:string)=>fetch(`${getDataURL}/region/${region}`);

const getCountyByName = (name:string)=>fetch(`${`${getDataURL}/name/${name}`}`);



export {getData, specificCountry, getBorderCountries, getRegion, getCountyByName} ;