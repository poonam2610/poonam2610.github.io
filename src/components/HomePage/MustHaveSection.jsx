import React from "react"
import MustHaveCard from "../../helper-components/MustHaveCard/MustHaveCard"
import * as data from "../../data/data.json";
import "./MustHaveSection.scss"

export default function MustHaveSection(){
  const dataForCards  = data.default.filter((value) => value.mustHave && value.mustHave === true)
  return (
    <div className = "mustHave-container">
      <h1>Must Haves</h1>
      <div className = "mustHaveCards-container">
        {dataForCards.map((item, index)=>{
          console.log("Lets see if VAlue is object", item)
          return <MustHaveCard key = {index} value ={item}/>
        })}
      </div>
    </div>
  )

}