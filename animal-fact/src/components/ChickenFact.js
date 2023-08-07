import React, { useState, useEffect } from 'react';

export default function ChickenFact() {
    
    //declaring state
    const [chickenFact, setChickenFact] = useState("")
    
// fetch function
  const fetchChickenFact = () => {
    fetch('https://chickenfacts.io/api/v1/facts/21.json').then((res) => res.json()).then((fact) => {
      setChickenFact(fact.fact)
    })    
    };
    
//useEffect hook with fetch function inside 
  useEffect(() => {
     fetchChickenFact()
    }, []);
    
    return (
        <div className='chickenfact'>
      <h1> the chicken kingdom </h1>
        <button onClick={fetchChickenFact}>explore More Details</button>
          <p>{chickenFact}</p>
        
             {/* {Object.keys(chickenFact).map((message) => {
                return (
                <div>
                    {message}    
                </div>
                )
            })} */}
        {/* <ul>
        {Object.keys(chickenFact).map((fact) => (
          <li key={chickenFact}>
            {fact} 
          </li>
        ))}
      </ul> */}
        
        </div>
    )
}