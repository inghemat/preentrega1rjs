import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'



const NavBar = () => {
    return (

    <header>
        <img src='https://inghemat.github.io/entregafinalparasamu/Imagenes/logo%20completo-04%20(1).png'></img>
        <h1 style={{color:"Blue"}}>SOMOS KUISHI TA</h1>

        <><nav>
            <ul>
                <li>INICIO</li>
                <li>SOBRE NOSOTROS</li>
                <li>CONTACTENOS</li>
                
            </ul>
            <CardWidget />
        </nav></>

    </header>

    )
}

export default NavBar