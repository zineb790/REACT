import './App.css';
import {  Routes, Route } from "react-router-dom";
import CatFact from './components/CatFact';
import DogFact from './components/DogFact';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path="/catfact" element={<CatFact />}/>
        <Route path="/dogfact" element={<DogFact />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
       
      {/* </Router> */}
    </div>
  );
}

export default App;
