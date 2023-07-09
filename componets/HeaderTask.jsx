import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataTask } from '../componets/ContexTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

function HeaderTask() {
  const { dataUsers, settaskManager, settaskManagerEmail } = useContext(DataTask);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(DataTask);
  
  const handleLogout = () => {
    settaskManagerEmail(null);
    settaskManager(null);
    setLoggedInUser(null);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = dataUsers.find((user) => user.name === username && user.password === password);
    if (user) {
      console.log(user.email);
      settaskManagerEmail(user.email);
      settaskManager(user.name);
      setLoggedInUser(user);
      setUsername('');
      setPassword('');
    } else {
      alert('Invalid username or password');
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
              <button className='buttonheader'>
                <Link to="/work-area">Work Area</Link>
                </button>
              ) : (
                <button className='buttonheader'>
                <Link to="/register-page">Register</Link>
                </button>
              )}
            </div>
            {loggedInUser ? (
              <div className='login-form'>
                <p className='buttonheader'>{loggedInUser.name}</p>
                <p>{loggedInUser.email}</p>
                <button className='buttonform' type='submit' onClick={handleLogout}>
                  <span>
                    <FontAwesomeIcon className="iconSmall" icon={faRightFromBracket} />
                   </span>
                </button>
              </div>
            ) : (
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
