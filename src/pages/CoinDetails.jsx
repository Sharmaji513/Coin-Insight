import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'


const CoinDetails = () => {

const {coinId} = useParams()
  
    
  return (
    <div>
        <Navbar/>
        <h1>hello {coinId}</h1>
    </div>
  )
}

export default CoinDetails