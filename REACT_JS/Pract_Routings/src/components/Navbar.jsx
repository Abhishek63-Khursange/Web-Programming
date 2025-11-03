import {Link} from 'react-router-dom';
export function Navbar()
{
    return(
        <div>
               <Link to="/">Home</Link>
               <span>  </span>
               <Link to="/About-Us">About</Link>
               <span>  </span>
               <Link to="/Contact-Us">Contact</Link>
        </div>
    )
}