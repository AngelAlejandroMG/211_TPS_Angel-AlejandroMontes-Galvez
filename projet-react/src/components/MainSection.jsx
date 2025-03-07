import './MainSection.css'
import CardList from './CardList'
import ProfileSection from './ProfileSection'
import { card, profil } from '../assets/cards.js'

function MainSection() { 
  return (
    <>
      <main>
        <ProfileSection 
            photoProfil={profil.photoProfil} 
            texte={profil.texte} 
            Nom={profil.Nom}  
            post={profil.post} 
            followers={profil.followers} 
            following={profil.following}
            alt={profil.alt}
        />
        <CardList 
          cards={card} 
        />
      </main>
    </>
  )
}

export default MainSection