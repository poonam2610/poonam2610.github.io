import React from "react"
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/Routes";
import "./Header.scss"

export default function Snacks(){
    return(
        <div className="category-content">
            <nav class="ll">
                <ul class="dropdown-content">
                
                    <li>
                    <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.HOT_SNACKS}`}>Hot Snacks
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}