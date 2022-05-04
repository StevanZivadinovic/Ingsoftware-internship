import React from 'react'
import { Routes, Route, useParams } from "react-router-dom";
const DetailsPage = () => {
    let param = useParams();
    console.log(param)
  return (
    <div>{param.id}</div>
  )
}

export default DetailsPage