import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { yupResolver } from '@hookform/resolvers/yup';
function FooterTask() {
    library.add(faGithub, faLinkedin);
    return (
        <footer className="pie-pagina">
            <div className="grupo-1">
                <div className="boxfooter">
                    <figure>
                        <a href="#">
                            <span><FontAwesomeIcon className='icon-logo' icon={faListCheck} /></span>
                        </a>
                    </figure>
                </div>
                <div className="boxfooter">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Somos los mejores desarrolladores del mercado para tu empresa emprendimiento o negocio</p>
                </div>
                <div className="boxfooter">
                    <h2>SIGUENOS</h2>
                    <div className="red-social">
                        <a href="https://github.com/valeriomena" target="_blank" rel="noopener noreferrer">
                            <span><FontAwesomeIcon className='icon-logo' icon={faGithub} /></span>
                        </a>
                        <a href="https://www.linkedin.com/in/andresmena" target="_blank" rel="noopener noreferrer">
                            <span><FontAwesomeIcon className='icon-logo' icon={faLinkedin} /></span>
                        </a>
            
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2023 <b>Andres Mena</b><p>Correo electrónico: valerio_mena@hotmail.com</p>
                    <p>Cel: (57) 3003019961</p> - Todos los Derechos Reservados.</small>
            </div>
        </footer>
    );
}
export default FooterTask;
