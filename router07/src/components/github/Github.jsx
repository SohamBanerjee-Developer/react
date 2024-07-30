import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    const[value, setData]=useState([])
    useEffect(() =>{

      fetch('https://api.github.com/users/SohamBanerjee-Developer') 
      .then(value => value.json()) 
      .then((response) => {
        console.log(response);
        setData(response)})
    },[]
  )
     
        
     
   
    console.log(data)
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {value.followers}
    <img src={value.avatar_url} alt="Git picture" width={300} />
    </div>
    
  )

}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/SohamBanerjee-Developer')
    return response.json()
}