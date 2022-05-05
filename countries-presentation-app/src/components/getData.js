
const getData = () => fetch('https://restcountries.com/v2/all')


const specificCountry = (name) =>  fetch(`https://restcountries.com/v2/name/${name}`);

const getBorderCountries = (attr)=> fetch(`https://restcountries.com/v2/alpha/${attr}`);

export {getData, specificCountry, getBorderCountries} ;