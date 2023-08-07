import React, { useState, useEffect } from 'react';



export default function DogBreed() {
    
    //declaring state
    const [dogBreed, setDogBreed] = useState("")
    
// fetch function
  const fetchDogBreed = () => {
    fetch('https://dog.ceo/api/breeds/list/all').then((res) => res.json()).then((data) => {
        setDogBreed(data.message);
    })
    };

//useEffect hook with fetch function inside 
  useEffect(() => {
     fetchDogBreed()
    }, []);
    
    return (
        <div className='breeds'>
      <h1>dog breeds</h1>
            <button onClick={fetchDogBreed}>scroll down for more dog breeds</button>
            {/* {dogBreed} */}
            {Object.keys(dogBreed).map((message) => {
                return (
                <div>
                {message} 
                </div>
                )
                
                
            })}
        </div>
    )
}