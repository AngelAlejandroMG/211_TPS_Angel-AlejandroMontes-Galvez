import './App.css'
import MainSection from './components/MainSection'
import Header from './components/Header'  
import Footer from './components/Footer'


function App() { 
  return (
    <>
    <header>
        <Header logo="https://i.pinimg.com/736x/e8/88/cd/e888cd8d2708d8f0388198fd551a1a00.jpg" H1="MySocial"/>
    </header>
    <main>
      <MainSection/>
    </main>
    <footer>
        <Footer span="© 2025 Cégep Marie-Victorin"/>
    </footer>
    </>
  )
}

export default App
