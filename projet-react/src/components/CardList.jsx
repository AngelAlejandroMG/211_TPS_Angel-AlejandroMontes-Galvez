import Card from './Card.jsx'
import './CardList.css'



function CardList(props) { 
  const cardElem = props.cards.map(card => {
    return <Card
            key={card.id}
            logo={card.logo}
            titre={card.titre}
            texte={card.texte}
            alt={card.alt}
    />
  })
  return (
    <>
       <ul className="card-list">
          {cardElem}
        </ul> 
    </>
  )
}

export default CardList



