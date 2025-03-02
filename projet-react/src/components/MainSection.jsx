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
        <ProfileSection profil="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" texte="Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️" nom="Jane Doe" post="4 posts" followers="188 followers" following="206 following"/>
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