import './Footer.css';
import { FaWhatsapp, FaFacebookF, FaTiktok } from 'react-icons/fa';

function Footer() {
    const telefono = 59176510419;
    const urlWhatsApp = `https://wa.me/${telefono}`;
    const urlFacebook = "https://www.facebook.com/RogStreakStore";
    const urlTiktok = "https://www.tiktok.com/@StackDevsBolivia";

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>StackDevsBolivia</h3>
                    <p>Formando desarrolladores del futuro</p>
                </div>

                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Teléfono: +591 76510419</p>
                    <p>Síguenos en nuestras redes sociales</p>
                </div>

                <div className="footer-section">
                    <h4>Redes Sociales</h4>
                    <div className="social-icons">
                        <a 
                            href={urlWhatsApp} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="social-icon whatsapp"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                        <a 
                            href={urlFacebook} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="social-icon facebook"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>
                        <a 
                            href={urlTiktok} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="social-icon tiktok"
                            aria-label="TikTok"
                        >
                            <FaTiktok />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 StackDevsBolivia - Todos los derechos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;
