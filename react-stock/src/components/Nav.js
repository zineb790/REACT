import { Link } from "react-router-dom";

function Nav(props) {
    return (
        
        <nav className="App-header">
            <Link to="/">home</Link>
            <Link to="/stocks">Stocks market</Link>
            <Link to="/about">About</Link>
            </nav>
    )
}

export default Nav;