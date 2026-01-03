import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css'
import './DetalleCurso.css'
import Typewriter from 'typewriter-effect';
import { FaArrowLeft } from "react-icons/fa";
import Snowfall from 'react-snowfall';
import emailjs from '@emailjs/browser'

function DetalleCurso(){
    const { id } = useParams();
    const [curso, setCurso] = useState(null);
    const telefono = 59176510419;

    const[ci, setCi] = useState("");
    const[nombre, setNombre] = useState("");
    const[paterno, setPaterno] = useState("");
    const[materno, setMaterno] = useState("");
    const[correo, setCorreo]= useState("");
    const[numero, setNumero] = useState("");

    const inscripcion = (e) =>{
        e.preventDefault();

        const datosInscripcion={
            ci: ci,
            nombre : nombre,
            paterno: paterno,
            materno: materno,
            correo : correo,
            numero : numero,
            curso:{
                id:id,
            }
        };

        const datosParaCorreo={
            nombre: nombre,
            paterno: paterno,
            materno: materno,
            correo: correo,
            numero: numero,
            ci:ci,
            nombre_curso: curso.nombre

        }
        fetch("https://backend-springboot-stackdevsbolivia.onrender.com/api/inscripciones",{
                method:'POST',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(datosInscripcion)
        })
        .then(response => response.json())
        .then(()=>{

            emailjs.send('service_rydksjn','template_1qkmgpg', datosParaCorreo,'1d3xdjPCQBlYzUbDf')
            .then((result)=>{
                console.log("correo enviado", result.text)
            }).catch((error)=>{
                console.log("Error al enviar", error)
            })
            Swal.fire({
                title : "Gracias por completar tu pre-inscripcion",
                text: "pronto nos comunicaremos contigo, puedes seguir explorando otros cursos",
                icon: "success",
                confirmButtonColor:"black",
                confirmButtonText: "De acuerdo"
            })
            setCi("");
            setNombre("");
            setPaterno(""),
            setMaterno(""),
            setCorreo(""),
            setNumero("")
        })
    }
    const obtenerCurso = ()=>{
        fetch(`https://backend-springboot-stackdevsbolivia.onrender.com/api/cursos/${id}`)
        .then((response) => response.json())
        .then((data) => setCurso(data))
        .catch((error)=>console.error("Error",error))
    }
    useEffect(()=>{
        obtenerCurso();
    },[id])

    if(!curso){
        return <h2>Cargando curso...</h2>;
    }
    const mensaje = `Hola StackDevs, estoy interesado en el curso de *${curso.nombre}*. ¿Me podrian brindar mas informacion porfavor?`;
    const urlWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    return(
        <>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}>
                <Snowfall color="#3139A3" />
            </div>

            <div className="container" style={{color: "white"}}> 
                <Link to="/" className="volver">
                <FaArrowLeft aria-hidden="true"/>
                
                </Link>
                
                <h2>{curso.nombre}</h2> 

            {curso.detalle ? (
                <div className="detalle">
                    <img src={curso.urlImagen} alt={curso.nombre} />
                    <p><strong>Descripcion:</strong> {curso.detalle.descripcion}</p>
                    <p style={{ whiteSpace: "pre-line" }}><strong>Temario:</strong> {curso.detalle.temario}</p>
                    
                    <p><strong>Requisitos:</strong> {curso.detalle.requisitos}</p>


                    <div style={{ marginTop: "20px" }}>
                        <a 
                            href={urlWhatsApp} 
                            target="_blank" 
                            rel="noreferrer"
                            className="btn-whatsapp"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.58 20.16 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.71 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16Z"/>
                            </svg>
                            Solicitar Información
                        </a>
                    </div>
                </div>

                
            ):(
                <p>Sin detalle</p>
            )}

            <div className="formulario-container">

                <h2>REALIZA TU PRE-INSCRIPCION</h2>
                <h3>!Asegurate de llenar tus datos Correctamente!</h3>

                <form onSubmit={inscripcion} className="formu">
                    <h4>CI</h4>
                    <input type="text" placeholder="Tu CI sin expedido" value={ci} onChange={e => setCi(e.target.value)} required />
                    <h4>Nombre(s)</h4>
                    <input type="text" placeholder="Tu Nombre(s)" value={nombre} onChange={e => setNombre(e.target.value)} required />
                    <h4>Apellido Paterno</h4>
                    <input type="text" placeholder="Tu respuesta" value={paterno} onChange={e => setPaterno(e.target.value)} required />
                    <h4>Apellido Materno</h4>
                    <input type="text" placeholder="Tu respuesta" value={materno} onChange={e => setMaterno(e.target.value)} required/>
                    <h4>Correo Electronico</h4>
                    <input type="text" placeholder="Tu correo electronico" value={correo} onChange={e => setCorreo(e.target.value)} required />
                    <h4>Numero de WhatsApp</h4>
                    <input type="text" placeholder="Tu numero de WhatsApp" value={numero} onChange={e => setNumero(e.target.value)} required/>
                    <button type="submit">Realizar Pre-inscripcion</button>


                </form>
                


            </div>

            </div>
        </>
        
    )
}
export default DetalleCurso;