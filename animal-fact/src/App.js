import './App.css';
import {  Routes, Route } from "react-router-dom";
import CatFact from './components/CatFact';
import DogFact from './components/DogFact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import DogBreed from './components/DogBreed'

function App() {
  return (
    <div className="App">
     
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path="/catfact" element={<CatFact />}/>
        <Route path="/dogfact" element={<DogFact />} />
        <Route path="/dogbreed" element={<DogBreed />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
       
      
    </div>
  );
}

export default App;
