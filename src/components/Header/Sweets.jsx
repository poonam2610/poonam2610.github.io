import React, {useState} from "react"
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/Routes";
import "./Header.scss"



export default function Sweets(){
    console.log("sweets-render")
    return(
        <div className="category-content">
          <nav>
              <ul className="dropdown-content">
                  <li>
                  <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.MILK_SWEETS}`}> Milk sweets </Link> 
                  </li>                <li>
                <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.SHRIKHAND}`}>Shrikhand</Link>
               </li>
               <li>
               <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.FARSAN_SWEETS}`}>Farsan sweets
             </Link>
          
               </li>
               <li>
               <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.CHENA_SWEETS}`}>Chena sweets
            </Link>
              
               </li>
               <li>
               <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.PEDA}`}>Peda
                   </Link>
               </li>
               <li>
               <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.MILK_SWEETS}`}>Milk Sweets
               </Link>
               </li>
               <li>
               <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.DESI_GHEE_SWEETS}`}>Desi ghee sweets
               </Link>
                   </li>  
                   <li>
                   <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.CASHEW_DRYFRUIT_SWEETS}`}>Cashew/Dryfruit Sweets
                   </Link>
                   </li>
                   <li>
                   <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.BENGALI_SWEETS}`}>Bengali sweets
                   </Link>

                   </li>
                   
                   <li>
                   <Link className="link__style" to={`${ROUTES.CATEGORY}${ROUTES.OTHER_PRODUCTS}`}>Other sweets
                   </Link>
                   </li>
              </ul>
              </nav>  
        </div>
    )
}

