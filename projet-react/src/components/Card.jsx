import React from "react"
import cards from '../assets/cards.js'

function Card() { 
  return (
    <>
      {cards.map(card => (
        <li class="card" key={card.id}>
          <img class="card-image" src={card.logo} alt={card.titre} />
          <div class="card-description">
            <h2>{card.titre}</h2>
            <p>{card.texte}</p>
          </div>
        </li>
      ))}
    </>
  )
}

export default Card