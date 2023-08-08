import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { DataTask } from '../componets/ContexTask'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import WorkAreaPage from '../pages/WorkAreaPage'
import IndicatorsPage from '../pages/WorkAreaPage'
import FooterTask from '../componets/FooterTask'
import Headertask from '../componets/HeaderTask'
import './App.css'

function App() {

  const [ListTask, setListTask] = useState([]);  
  const [taskManager, settaskManager] = useState();
  const [taskManagerEmail, settaskManagerEmail] = useState();
  const [userEmails, setUserEmails] = useState([]);
  const [userNames, setUserNames] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null); // Inicializar con null para mostrar el formulario de inicio de sesión.
 
  return (
    <div className="container">
      <DataTask.Provider value={{
        ListTask,
        setListTask,
        taskManager,
        settaskManager,
        taskManagerEmail,
        settaskManagerEmail,
        userEmails,
        userNames,
        loggedInUser, 
        setLoggedInUser
      }}>
         <BrowserRouter>
         <Headertask />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register-page' element={<RegisterPage />} />
            <Route path='/work-area' element={<WorkAreaPage />} />
            <Route path='/indicators' element={ <IndicatorsPage/>} />
          </Routes>
        </BrowserRouter>
        <FooterTask />
      </DataTask.Provider>
    </div>
  )
}
export default App
