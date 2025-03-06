import './MainSection.css'
import CardList from './CardList'
import ProfileSection from './ProfileSection'
import { card, profil } from '../assets/cards.js'

function MainSection() { 
  return (
    <>
    
    
      <main>
        <ProfileSection 
          PhotoProfil={profil.PhotoProfil} 
          texte={profil.texte} 
          Nom={profil.Nom}  
          post={profil.post} 
          followers={profil.followers} 
          following={profil.following}
        />
        <CardList cards={card} />
      </main>
        
      
    </>
  )
}

export default MainSection