import { useState } from 'react'
import FormTask from '../componets/FormTask'
import HeadTitle from '../componets/HeadTitle'
import Tasklist from '../componets/TaskList'
import { DataTask } from '../componets/ContexTask'
import './App.css'

function App() {
  const [ListTask, setListTask] = useState([
         {id:'345', name:'Estudiar' , descript:'curso de react', date:'15/4/', hour:'6:00 pm'},
         {id:'346', name:'Enseñar' , descript:'curso de java', date:'15/4/', hour:'6:00 pm'} 
  ])

  /*
  const saveToLocalStorage = (list) => { 
    try {
      if (!localStorage.getItem("baseDatos")) {
        localStorage.setItem("baseDatos", JSON.stringify(list));
      }
    } catch (error) {
      console.error (error)
    }
  }
  const readFromLocalStorage = () => {
    const data = localStorage.getItem('baseDatos');
    if (data) {
      setList(JSON.parse(data));
    }
  };
  console.log(baseDatos)
  */
  
  /* useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("baseDatos"));
    if (datos) {
      console.log(datos);
      setList(datos);
    }
  }, []); */ 
  return (
    <div className="App">
      <header>
        <HeadTitle titulo='lista de tareas' />
      </header>
      <DataTask.Provider value={{ ListTask, setListTask }}>
      <div className='container'>
         <FormTask/>   
      <div className='listTask'>
         <Tasklist /> 
      </div>
        </div> 
      </DataTask.Provider>
    </div>
  )
}

export default App
