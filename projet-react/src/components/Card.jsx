import React from "react"
import './Card.css'

function Card(props) { 


  return (
    <>   
        <li class="card" key={props.id}>
          <img class="card-image" src={props.logo} alt={props.titre} />
          <div class="card-description">
            <h2>{props.titre}</h2>
            <p>{props.texte}</p>
          </div>
        </li>
    
    </>
  )
}

export default Card