import './ProfileSection.css'
import card from '../assets/cards'


function ProfileSection(prop) { 
  const postCount = card.length
  return (
    <>
      <div class="profile">
                <div class="profile-name-image">
                    <img class="profile-image " src={prop.profil} alt=""/>
                    <h1 class="profile-user-name">{prop.nom}</h1>
                </div>
                <div class="profile-bio">
                    <p>{prop.texte}</p>
                </div>
                <div class="profile-stats">
                    <ul>
                        <li>{postCount} posts</li>
                        <li>{prop.followers}</li>
                        <li>{prop.following}</li>
                    </ul>
                </div>
            </div>
    </>
  )
}

export default ProfileSection
