import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/Routes";
import "./Header.scss"

export default function Namkeen(){
    return(
        <div className="category-content">
            <nav class="ll">
                <ul class="dropdown-content">
                    <li>
                    <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.FARSAN}`}>Farsan
                    </Link>
                    </li>
                    <li>
                    <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.DRY_SNACKS}`}>Dry Snacks
                    </Link>
                    </li>
                    <li>
                    <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.NAMKEEN}`}>NAMKEEN
                    </Link>
                    </li>
                   
                </ul>
            </nav>
        </div>
    )
}