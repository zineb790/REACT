import './App.css';
import {  Routes, Route } from "react-router-dom";
import CatFact from './components/CatFact';
import DogFact from './components/DogFact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import DogBreed from './components/DogBreed'
import ChickenFact from './components/ChickenFact'

function App() {
  return (
    <div className="App">
     
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path="/catfacts" element={<CatFact />}/>
        <Route path="/dogfacts" element={<DogFact />} />
        <Route path="/dogbreeds" element={<DogBreed />} />
        <Route path="/chickenfacts" element={<ChickenFact />} />

        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
       
      
    </div>
  );
}

export default App;
