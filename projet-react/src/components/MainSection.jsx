import './MainSection.css'
import Header from './Header'
import Footer from './Footer'
import CardList from './CardList'
import ProfileSection from './ProfileSection'

function MainSection() { 
    return (
      <>
    <header>
        <Header/>
    </header>
    
    <main>
        <ProfileSection/>
        <CardList/>
    </main>
        
    <footer>
        <Footer/>
    </footer>
        
        
        
      </>
    )
  }
  
  export default MainSection