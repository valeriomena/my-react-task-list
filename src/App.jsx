import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { DataTask } from '../componets/ContexTask'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import WorkAreaPage from '../pages/WorkAreaPage'
import FooterTask from '../componets/FooterTask'
import Headertask from '../componets/HeaderTask'
import './App.css'

function App() {
  const [ListTask, setListTask] = useState([
    { id: '345', doneTask: true, name: 'Estudiar', descript: 'curso de react', date: '15/4/', hour: '6:00 pm', email: 'valerio_mena@hotmail.com' },
    { id: '346', doneTask: false, name: 'Enseñar', descript: 'curso de java', date: '15/4/', hour: '6:00 pm', email: 'valerio_mena@hotmail.com' }
  ]);
  const [dataUsers, setdataUsers] = useState([
    { id: 'ccDXHXwbcQx5UD-4JjuUs', name: 'Andres', email: 'valerio_mena@hotmail.com', password: '123456', passwordCheck: '123456' }
  ]);
 
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("ListTask"));
    if (data) {
      setListTask(data);
    }
  }, []);

  return (
    <div className="container">
      <DataTask.Provider value={{ ListTask, setListTask, dataUsers, setdataUsers }}>
         <BrowserRouter>
         <Headertask />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register-page' element={<RegisterPage />} />
            <Route path='/work-area' element={<WorkAreaPage />} />
          </Routes>
        </BrowserRouter>
        <FooterTask />
      </DataTask.Provider>
    </div>
  )
}
export default App
