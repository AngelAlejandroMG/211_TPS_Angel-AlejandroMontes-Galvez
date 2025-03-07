import './Header.css'

function Header(props) { 
  return (
    <>
    <header class="header">
     <div class="header-logo">
                <img src={props.logo} alt={props.alt}/>
            </div>
            <h1>{prop.H1}</h1>
        <div/>
        </header>
    </>
  )
}

export default Header