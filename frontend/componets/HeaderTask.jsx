import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataTask } from '../componets/ContexTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Importa Axios
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function HeaderTask() {
  const { settaskManager, settaskManagerEmail, loggedInUser, setLoggedInUser } = useContext(DataTask);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleLogout = () => {
    settaskManagerEmail(null);
    settaskManager(null);
    setLoggedInUser(null);
    navigate('/'); // Utiliza navigate en lugar de useHistory
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Realizar la solicitud de inicio de sesión a la API
      const response = await axios.post('http://localhost:27017/api/login', {
        username,
        password,
      });

      // Si la solicitud es exitosa, el usuario existe en la base de datos
      const user = response.data;
      settaskManagerEmail(user.email);
      settaskManager(user.name);
      setLoggedInUser(user);
      setUsername('');
      setPassword('');
    } catch (error) {
      // Si la solicitud falla o el usuario no existe, mostrar un mensaje de error
      alert('Usuario no registrado o credenciales inválidas');
    }
  };

  return (
    <div className='navbar'>
      <header>
        <nav>
          <div className='pages'>
            <div className='button-group'>
              <button className='buttonheader'>
                <Link to="/">About As</Link>
              </button>
              {loggedInUser ? (
                <>
                  <button className='buttonheader'>
                    <Link to="/work-area">Work Area</Link>
                  </button>
                    <button className='buttonheader'>
                    <Link to="/indicators">Indicators</Link>
                  </button>
                </>
              ) : (
                <button className='buttonheader'>
                <Link to="/register-page">Register</Link>
                </button>
              )}
            </div>
            {loggedInUser ? ( // Si el usuario ha iniciado sesión, muestra sus datos y el botón de logout.
              <div className='login-form'>
                <p className='buttonheader'>{loggedInUser.name}</p>
                <p>{loggedInUser.email}</p>
                <button className='buttonform' type='submit' onClick={handleLogout}>
                  <span>
                    <FontAwesomeIcon className="iconSmall" icon={faRightFromBracket} />
                   </span>
                </button>
              </div>
            ) : ( // Si el usuario no ha iniciado sesión, muestra el formulario de inicio de sesión.
              <div className='login-form'>
                <form onSubmit={handleLogin}>
                  <input className='box' type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                  <input className='box' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='buttonform' type='submit'>
                      <span>
                        <FontAwesomeIcon className="iconSmall" icon={faRightToBracket} />
                      </span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderTask;
