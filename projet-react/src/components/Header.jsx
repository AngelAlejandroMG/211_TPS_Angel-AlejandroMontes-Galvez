import './Header.css'

function Header(prop) { 
  return (
    <>
    <header class="header">
     <div class="header-logo">
                <img src={prop.logo} alt="site logo"/>
            </div>
            <h1>{prop.H1}</h1>
        <div/>
        </header>
    </>
  )
}

export default Header