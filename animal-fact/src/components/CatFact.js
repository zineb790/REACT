import React, { useState, useEffect } from 'react';

export default function CatFact() {
    
    //declaring state
    const [catFact, setCatFact] = useState("")
    
// fetch function
  const fetchCatFact = () => {
    fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => {
      setCatFact(data.fact)
    })    
    };
    
//useEffect hook with fetch function inside 
  useEffect(() => {
     fetchCatFact()
    }, []);
    
    return (
        <div>
      <h1> amazing cat fact</h1>
      <button onClick={fetchCatFact}>generate cat fact</button>
      <p>{catFact}</p> 
        </div>
    )
}