import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/Catfacts">CatFacts</Link>
            <Link to="/dogfacts">DogFacts</Link>
            <Link to="/dogbreeds">DogBreeds</Link>
            <Link to="/chickenfacts">chickenfacts</Link>
        </div>
    )
}