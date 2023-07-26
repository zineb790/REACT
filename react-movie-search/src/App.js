import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
// import { useState } from 'react';
import { useState, useEffect } from 'react';

function App() {

  const movieList = [
    "Donnie Darko",
    "Home Alone",
    "Black Panther",
    "The Dark Knight",
    "Spider-Man"
  ]
  
  const apiKey = "ec9629d3"

  const [movie, setMovie] = useState(null)

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    )
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      )

    const data = await response.json()
      

    // setMovie(data)
      setMovie(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMovie(movieList[Math.floor(Math.random() * movieList.length)]);
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      {/* <MovieDisplay /> */}
      <MovieDisplay movie={movie} />
    </div>
  );
}
export default App;
 