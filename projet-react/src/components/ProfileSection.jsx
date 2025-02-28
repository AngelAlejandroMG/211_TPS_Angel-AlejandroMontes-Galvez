import './ProfileSection.css'


function ProfileSection() { 
  return (
    <>
      <div class="profile">
                <div class="profile-name-image">
                    <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>
                    <h1 class="profile-user-name">Jane Doe</h1>
                </div>
                <div class="profile-bio">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
                </div>
                <div class="profile-stats">
                    <ul>
                        <li>4 posts</li>
                        <li>188 followers</li>
                        <li>206 following</li>
                    </ul>
                </div>
            </div>
    </>
  )
}

export default ProfileSection
