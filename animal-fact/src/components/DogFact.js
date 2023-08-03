import React, { useState, useEffect } from 'react';


export default function DogFact() {
    
    //declaring state
    const [dogFact, setDogFact] = useState("")
    
// fetch function
  const fetchDogFact = () => {
    fetch('https://dog-api.kinduff.com/api/facts').then((res) => res.json()).then((data) => {
      setDogFact(data.facts)
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