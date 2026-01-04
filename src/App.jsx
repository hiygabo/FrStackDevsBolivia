import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaCursos from "./ListaCursos";
import DetalleCurso from "./DetalleCurso";
import Login from "./Login"
import NavBar from "./NavBar";
import Información from "./Informacion";
import Footer from "./Footer";
import './App.css'
import Snowfall from "react-snowfall";

function App(){
  return(

    <BrowserRouter>
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Snowfall color="#3139A3" />
    </div>
    <NavBar />
    <Routes>
      <Route path="/" element={<ListaCursos/>}/>
      <Route path="/curso/:id" element={<DetalleCurso/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/informacion" element={<Información/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
export default App;