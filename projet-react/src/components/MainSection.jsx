import './MainSection.css'
import Header from './Header'
import Footer from './Footer'
import CardList from './CardList'
import ProfileSection from './ProfileSection'
import cards from '../assets/cards.js'


function MainSection() { 
  const cardElem = cards.map(card => {
    return <CardList 
            key={card.id}
            logo={card.logo}
            titre={card.titre}
            texte={card.texte}
    />
  })

    return (
      <>
    <header>
        <Header logo="https://i.pinimg.com/736x/e8/88/cd/e888cd8d2708d8f0388198fd551a1a00.jpg" H1="MySocial"/>
    </header>
    
    <main>
        <ProfileSection/>
        <CardList>
          {cardElem}
        </CardList>
    </main>
        
    <footer>
        <Footer span="© 2025 Cégep Marie-Victorin"/>
    </footer>
        
        
        
      </>
    )
  }
  
  export default MainSection