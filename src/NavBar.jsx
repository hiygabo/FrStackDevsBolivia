import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from './assets/logo.png'
function NavBar(){  

    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const cerrarSesion = () =>{
        localStorage.removeItem("usuario")
        window.location.href ="/"
    }
    return(
        <div className='navbar'>
            <nav>
                <div className='logo'>
                    <img src={logo} alt="logo StackDevs" className='logo-imagen' />

                </div>

                <div className='links'>

                    <Link to='/' className='inicio'>Inicio</Link>
                    {usuario ? (
                        <div className='user-section'>
                            <span className='bienvenida'>Hola, {usuario.nombreUsuario}</span>
                            <button onClick={cerrarSesion} className='btn-cerrar-sesion'>Cerrar Sesión</button>
                        </div>

                    ):(
                        <Link to='login' className='inicio'>Ingresar</Link>
                    )}
                    <Link to='/informacion' className='inicio'>Sobre Nosotros</Link>


                </div>
            </nav>

        </div>


    )
}

export default NavBar