import React, { useState, useEffect } from 'react';


export default function DogFact() {
    
    //declaring state
    const [dogFact, setDogFact] = useState("")
    
// fetch function
  const fetchDogFact = () => {
    fetch('https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs').then((res) => res.json()).then((data) => {
      setDogFact(data.dogs)
    })
      
    };
   
    
//useEffect hook with fetch function inside 
  useEffect(() => {
     fetchDogFact()
    }, []);
    
    return (
        <div>
      <h1> amazing dog fact</h1>
      <button onClick={fetchDogFact}>generate dog fact</button>
      <p>{dogFact}</p> 
        </div>
    )
}