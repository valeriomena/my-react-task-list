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
  const [ListTask, setListTask] = useState([
    { id: '345', doneTask: true, name: 'Estudiar', descript: 'curso de react', date: '15/4/', hour: '6:00 pm', email: 'valerio_mena@hotmail.com',responsible: 'Andres' },
    { id: '346', doneTask: false, name: 'Enseñar', descript: 'curso de java', date: '15/4/', hour: '6:00 pm', email: 'valerio_mena@hotmail.com',responsible: 'Andres' }
  ]);
  const [dataUsers, setdataUsers] = useState([
    { id: 'ccDXHXwbcQx5UD-4JjuUs', name: 'Andres', email: 'valerio_mena@hotmail.com', password: '123456', passwordCheck: '123456' },
    {id: 'B8QwAk9EPj8tpHh2LoY0h', name: 'Administrador', email: 'admin@admin.com', password: 'administrador', passwordCheck: 'administrador'}
  ]);

  const [taskManager, settaskManager] = useState();
  const [taskManagerEmail, settaskManagerEmail] = useState();
  const [userEmails, setUserEmails] = useState([]);
  const [userNames, setUserNames] = useState([]);

  useEffect(() => {
  const emails = dataUsers.map((user) => user.email);
    setUserEmails(emails);
  const names = dataUsers.map((user) => user.name);
    setUserNames(names); 
}, [dataUsers]);
 
/*   useEffect(() => {
    const data = JSON.parse(localStorage.getItem("ListTask"));
    if (data) {
      setListTask(data);
    }
  }, []);
 */
  return (
    <div className="container">
      <DataTask.Provider value={{ ListTask, setListTask, dataUsers, setdataUsers, taskManager, settaskManager, taskManagerEmail, settaskManagerEmail, userEmails,userNames }}>
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
