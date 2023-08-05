import React, { useState, useEffect } from 'react';

export default function ChickenFact() {
    
    //declaring state
    const [chickenFact, setChickenFact] = useState("")
    
// fetch function
  const fetchChickenFact = () => {
    fetch('https://chickenfacts.io/api/v1/facts/30.json').then((res) => res.json()).then((data) => {
      setChickenFact(data.fact)
    })    
    };
    
//useEffect hook with fetch function inside 
  useEffect(() => {
     fetchChickenFact()
    }, []);
    
    return (
        <div className='chickenfact'>
      <h1> amazing chicken facts</h1>
      <button onClick={fetchChickenFact}>Uncover More Details</button>
            <p>{chickenFact}</p> 
            {/* {Object.keys(chickenFact).map((message) => {
                return (
                <div>
                    {message}    
                </div>
                )
                
                
            })} */}
        </div>
    )
}