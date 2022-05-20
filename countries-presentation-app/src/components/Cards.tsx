import { FC } from "react";
import {
    Link
} from "react-router-dom";

export type cardsTypes = {
    name:string,
    alpha3Code:number,
    flag:string,
    population:number, 
    region:string,
    capital:string,
    a:{
    alpha3Code:number,
    }
}

const Cards:FC<cardsTypes> = (a) => {
  return (
  
    <Link to={a.name}>
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
}

export default Cards