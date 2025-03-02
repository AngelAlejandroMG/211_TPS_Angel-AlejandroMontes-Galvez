import './ProfileSection.css'


function ProfileSection(prop) { 
  return (
    <>
      <div class="profile">
                <div class="profile-name-image">
                    <img src={prop.profil} alt=""/>
                    <h1 class="profile-user-name">{prop.nom}</h1>
                </div>
                <div class="profile-bio">
                    <p>{prop.texte}</p>
                </div>
                <div class="profile-stats">
                    <ul>
                        <li>{prop.post}</li>
                        <li>{prop.followers}</li>
                        <li>{prop.following}</li>
                    </ul>
                </div>
            </div>
    </>
  )
}

export default ProfileSection
