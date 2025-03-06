import React from 'react'
import './ProfileSection.css'
import profil from '../assets/ProfilSection'


function ProfileSection() { 
  
  return (
    <>
    {profil.map(profile => (
      <div class="profile">
                <div class="profile-name-image">
                    <img class="profile-image " src={profile.PhotoProfil} alt=""/>
                    <h1 class="profile-user-name">{profile.Nom}</h1>
                </div>
                <div class="profile-bio">
                    <p>{profile.texte}</p>
                </div>
                <div class="profile-stats">
                    <ul>
                        <li>{profile.post} posts</li>
                        <li>{profile.followers}</li>
                        <li>{profile.following}</li>
                    </ul>
                </div>
            </div>
            ))}
    </>
  )
}

export default ProfileSection
