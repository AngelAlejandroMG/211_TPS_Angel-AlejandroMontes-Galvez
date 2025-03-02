import React from "react"
import cards from '../assets/cards.js'

function Card() { 
  return (
    <>
      {cards.map(card => (
        <li className="card" key={card.id}>
          <img className="card-image" src={card.logo} alt={card.titre} />
          <div className="card-description">
            <h2>{card.titre}</h2>
            <p>{card.texte}</p>
          </div>
        </li>
      ))}
    </>
  )
}

export default Card