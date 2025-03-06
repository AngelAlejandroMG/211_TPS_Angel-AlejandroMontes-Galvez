import React from 'react'
import './ProfileSection.css'

function ProfileSection(props) { 
  return (
    <>
      <div className="profile">
        <div className="profile-name-image">
          <img className="profile-image" src={props.PhotoProfil} alt=""/>
          <h1 className="profile-user-name">{props.Nom}</h1>
        </div>
        <div className="profile-bio">
          <p>{props.texte}</p>
        </div>
        <div className="profile-stats">
          <ul>
            <li>{props.post} posts</li>
            <li>{props.followers}</li>
            <li>{props.following}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProfileSection