
import { Link } from "react-router-dom"
export function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <span>  </span>
            <Link to="/About-us">About</Link>
            <span>  </span>
            <Link to="Contact-us">Contact</Link>
        </div>
    )
}