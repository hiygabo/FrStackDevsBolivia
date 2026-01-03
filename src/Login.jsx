import {useState} from "react";
import Swal from "sweetalert2";
import './Login.css'

function Login(){

    const [nombreUsuario, setNombreUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");

    const iniciarSesion = (e) =>{
        e.preventDefault();

        const credenciales = {nombreUsuario, contraseña};
        fetch("https://backend-springboot-stackdevsbolivia.onrender.com/api/auth/login",{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credenciales)
        })
        .then(response => response.json())
        .then(data =>{
            if(data){
                localStorage.setItem("usuario", JSON.stringify(data));
                Swal.fire("Bienvenido", `Hola ${data.nombreUsuario}`, "succes")
                .then(()=>{
                    window.location.href ="/"
                })
            }else{
                Swal.fire("Error", "Credenciales invalidos", "error")
            }
        })
    }
    return(
        <div className="login">
            <h2>Iniciar Sesion</h2>
            <form onSubmit={iniciarSesion} className="formlogin">
                <input type="text"placeholder="usuario" value={nombreUsuario} onChange={e => setNombreUsuario(e.target.value)} required />
                <input type="text" placeholder="contraseña" value={contraseña} onChange={e => setContraseña(e.target.value)} required />
                <button type="submit">Ingresar</button>
            </form>


        </div>

    )
}

export default Login;