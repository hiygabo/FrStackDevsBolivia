import { useEffect,  useState } from "react";
import './App.css'
import Swal from "sweetalert2";
import Typewriter from 'typewriter-effect';
import 'sweetalert2/dist/sweetalert2.min.css'
import { Link } from "react-router-dom";
import CodeBackground from './CodeBackground';
// import logoSinTexto from './assets/logoSinTexto.png'

function ListaCursos(){
  const[cursos, setCursos] = useState([]);
  const[nombre, setNombre] = useState("");
  const[duracion, setDuracion] = useState("");
  const[descripcion, setDescripcion] = useState("");
  const[fechaInicio, setFechaInicio] = useState("");
  const[precio, setPrecio]= useState("")
  const[urlImagen, setUrlImagen] = useState("")
  const[idEditar, setIdEditar] = useState(null);
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
  const esAdmin = usuarioLogueado && usuarioLogueado.rol=="ADMIN";

  const obtenerCursos =() =>{
    fetch("https://backend-springboot-stackdevsbolivia.onrender.com/api/cursos")
    .then(response => response.json())
    .then(data => setCursos(data))
    .catch(error => console.error("Error",error))
  };



  useEffect(()=>{
    obtenerCursos();

  },[]);

  const manejarEnvio = (evento) =>{
    evento.preventDefault();

    const datosCurso = {nombre, duracion, descripcion, fechaInicio, precio,urlImagen};

    if(idEditar !== null){
      fetch(`https://backend-springboot-stackdevsbolivia.onrender.com/api/cursos/${idEditar}`,{
        method : "PUT",
        headers : {"Content-Type":"application/json"},
        body: JSON.stringify(datosCurso)
      })
      .then(() =>{
        Swal.fire({
          title : "Curso Actualizado",
          text: "Datos del curso actualizados correcatamente",
          icon: "succes",
          confirmButtonColor: "black"

        })
        limpiarFormulario();
        obtenerCursos();
      });
    }
    else{
      fetch(`https://backend-springboot-stackdevsbolivia.onrender.com/api/cursos`,{
        method:"POST",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify(datosCurso)
      })
      .then(()=>{
        Swal.fire({
          title: "Curso Introducido Correctamente",
          text: "Gracias por introducir un nuevo curso, tan pronto lo verifiquemos te notificaremos",
          icon: "succes",
          confirmButtonColor: "black"
        })
        limpiarFormulario();
        obtenerCursos();
      });
    }
  };


  const eliminarCurso =(id)=>{

    Swal.fire({
      title : "Administrador, esta apunto de eliminar un curso, ¿Esta seguro de eliminar el curso?",
      text: "Eliminar este curso no tendra reversion sin la aprobacion del administrador principal",
      icon : "warning",
      showCancelButton:true,
      confirmButtonColor: "black",
      cancelButtonColor: "#cfcfcf",
      confirmButtonText:"eliminar",
      cancelButtonText: "cancelar"

    }).then((result)=>{
      if(result.isConfirmed){
        fetch(`https://backend-springboot-stackdevsbolivia.onrender.com/api/cursos/${id}`,{
      method : "DELETE"
      })
      .then(() =>{
        obtenerCursos();
      })
      }
    })

    
  };

  const cargarDatosParaEditar = (curso) =>{
    setNombre(curso.nombre);
    setDuracion(curso.duracion);
    setDescripcion(curso.descripcion);
    setFechaInicio(curso.fechaInicio);
    setPrecio(curso.precio);
    setIdEditar(curso.id);
    setUrlImagen(curso.urlImagen)

  };


  const limpiarFormulario = () => {
    setNombre("");
    setDuracion("");
    setDescripcion("");
    setFechaInicio("");
    setPrecio("");
    setUrlImagen("")
    setIdEditar(null);
  }



  return (
    <>
      <div className="container" style={{padding : "20px"}}>
        {/* <div className="logo-sin-texto">
          <img src={logoSinTexto} alt="StackDevs Logo" className="logosintexto" />
        </div> */}

        <h1>
        <Typewriter
        onInit={(typewriter)=>{
          typewriter
          .typeString('StackDevsBolivia')
          .pauseFor(1000)
          .start()
        }}

        options={{
          autoStart: true,
          loop:false,
          delay:75,
          cursor:'|'
        }}
        
        
        
        />

      </h1>

      <CodeBackground />

      <p> 
        <Typewriter

        onInit={(typewriter)=>{
          typewriter
          .typeString('Bienvenido al panel de Cursos')
          .pauseFor(1000)
          .start()
        }}

        options={{
          autoStart:true,
          loop:false,
          delay:75,
          cursor:'|'
        }}
        
        />
      </p>
        
      {esAdmin && (
        <div className="card">
         <h3>{idEditar !== null? "Editar curso" : "Agregar nuevo curso"}</h3>

      <form onSubmit={manejarEnvio} noValidate>
        <input type="text" placeholder="nombre" value={nombre}
        onChange={(e) => setNombre(e.target.value)}required
        style={{marginRight : "10px"}}
        />

        <input type="text" placeholder="duracion" value={duracion}
        onChange={(e) => setDuracion(e.target.value)} required
        />

        <input type="text" placeholder="descripcion" value={descripcion} 
        onChange={(e) => setDescripcion(e.target.value)} required
        />

        <input type="text" placeholder="fechaInicio" value={fechaInicio}
        onChange={(e) => setFechaInicio(e.target.value)} required
        />
        <input type="number" placeholder="precio" value={precio} 
        onChange={(e)=> setPrecio(e.target.value)} required
        />
        <input type="text" placeholder="urlImagen" value={urlImagen} onChange={(e) => setUrlImagen(e.target.value)} required />

        <button type="submit">
            {idEditar !== null? "Actualizar" : "Guardar"}

        </button>

        {idEditar !== null && (
          <button type="button" onClick={limpiarFormulario}>
            Cancelar
          </button>
        )}
      </form>
      </div>
      )}



    <div className="lista">
      <h2>
        <Typewriter 

        onInit={(typewriter) =>{
          typewriter
          .typeString('Cursos disponibles en Stack')
          .pauseFor(1000)
          .start();
        }}
        options={{
          autoStart: true,
          loop:false,
          delay:75,
          cursor: '|'
        }}
        
        
        />

      </h2>
      <div className="cursos">
        {cursos.length === 0?(
        <p>No hay cursos disponibles</p>
      ):(
        <ul>
          {cursos.map((curso) =>(
            <li key={curso.id}>
              <div className="curso-imagen">
                <img src={curso.urlImagen} alt={curso.nombre} />

              </div>

              <span className="nombres-cursos">
                <strong>{curso.nombre}</strong><br />
                Duracion: {curso.duracion}<br/>
                {curso.descripcion}<br/>
                Inicio: {curso.fechaInicio}<br/>
                Precio: {curso.precio}Bs.<br/>
              </span>

              {esAdmin && (
                <>
                  <div className="editar">
                    <button type="button" onClick={() => cargarDatosParaEditar(curso)}>
                      Editar
                    </button>
                  </div>

                  <div className="eliminar">
                    <button type="button" onClick={() => eliminarCurso(curso.id)}>
                      Eliminar
                    </button>
                  </div>
                </>
              )}

              <div className="informacion">
                <Link to={`/curso/${curso.id}`}>
                  <button className="ins">Inscribirme</button>
                </Link>
              </div>
              

              
            </li>

          )
          )}

        </ul>

      )}




      </div>
      

    </div>




    </div>
    </>
  )

}
export default ListaCursos;