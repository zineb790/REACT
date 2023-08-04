import React, { useState, useEffect } from 'react';


export default function DogBreed() {
    
    //declaring state
    const [dogBreed, setDogBreed] = useState("")
    
// fetch function
  const fetchDogBreed = () => {
    fetch('https://dog.ceo/api/breeds/list/all').then((res) => res.json()).then((data) => {
        setDogBreed(data.all)
    })
     
    };

//useEffect hook with fetch function inside 
  useEffect(() => {
     fetchDogBreed()
    }, []);
    
    return (
        <div>
      <h1> dog breeds</h1>
      <button onClick={fetchDogBreed}>generate dog breeds</button>
          <p>{dogBreed}</p> 
        </div>
    )
}