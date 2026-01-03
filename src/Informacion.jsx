import './Informacion.css';
import CodeBackgroundInfo from './CodeBackgroundInfo';

function Información(){
    return(
        <div className="informacion-container">
            <div className="informacion-hero">
                <CodeBackgroundInfo />
                <h1>¿QUIENES SOMOS?</h1>
                <p>StackDevsBolivia es una plataforma de cursos independiente creada por desarrolladores independientes con el objetivo de repartir el conocimiento en el área de la Informática y Software destinados a toda la población interesada en el ámbito Informático en Bolivia, mediante cursos con precios bajos y justos al alcance de toda la población de programadores.</p>
            </div>

            <div className="informacion-section">
                <CodeBackgroundInfo />
                <h1>HISTORIA</h1>
                <p>En Bolivia, las plataformas alojadoras de cursos prácticos en el área Informática han ofrecido un bajo nivel con altos precios, enseñándote lo que fácilmente puedes aprender en un tutorial de YouTube gratis. Al ver esto nos percatamos que el nivel en programación es bajo ya que tanto el profesional como el estudiante del área debe aprender a analizar, pensar y resolver problemas reales que se aplican a las grandes empresas. Ahí nace StackDevsBolivia, un grupo de desarrolladores dispuestos a repartir conocimiento real aplicado a problemas de la vida real.</p>
            </div>

            <div className="informacion-section informacion-destacada">
                <CodeBackgroundInfo />
                <h1>MISIÓN</h1>
                <p>Impartir cursos destinados a estudiantes, profesionales e interesados en el área con precios accesibles y una instrucción profesional de parte de nuestros desarrolladores.</p>
            </div>

            <div className="informacion-section informacion-destacada">
                <CodeBackgroundInfo />
                <h1>VISIÓN</h1>
                <p>Llegar a toda la comunidad de programadores en Bolivia y ser la plataforma de cursos número 1 en el país.</p>
            </div>

            <div className="informacion-section">
                <CodeBackgroundInfo />
                <h1>NUESTROS VALORES</h1>
                <div className="valores-grid">
                    <ul>
                        <li>Innovación Constante: la tecnología no se detiene, nosotros tampoco</li>
                        <li>Aprendizaje práctico y teoría suficiente: Teoría para entender lo que se hace, más práctica y más código</li>  
                        <li>Transparencia: Calidad honesta y precios justos</li>  
                    </ul>
                </div>
            </div>

            <div className="informacion-section">
                <CodeBackgroundInfo />
                <h1>¿EMITEN CERTIFICADO?</h1>
                <p>Por el momento emitimos certificados SIN RESOLUCIÓN MINISTERIAL, estamos trabajando en ello para que nuestros certificados tengan la validez para el ámbito laboral y el beneficio de nuestros estudiantes.</p>
            </div>
            
            <div className="informacion-section">
                <CodeBackgroundInfo />
                <h1>¿HABRÁN SESIONES GRATIS?</h1>
                <p>Sí, como se mencionó en nuestra visión, priorizamos el conocimiento y educación de los estudiantes, porque aprender también es un regalo.</p>
            </div>
        </div>
    )
}
export default Información;