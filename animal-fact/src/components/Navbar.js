import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Catfact">CatFact</Link>
            <Link to="/dogfact">Dogfact</Link>
            <Link to="/dogbreed">Dogbreeds</Link>
        </div>
    )
}