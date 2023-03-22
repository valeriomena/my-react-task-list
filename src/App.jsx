import { useState } from 'react'
import HeadTitle from '../componets/HeadTitle'
import Tasklist from '../componets/TaskList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const list = [
         { name:'Estudiar' , descript:'curso de react', date:'15/4/', hour:'6:00 pm'},
         { name:'Enseñar' , descript:'curso de java', date:'15/4/', hour:'6:00 pm'} 
        ]
  return (
    <div className="App">
      <HeadTitle titulo='lista de tareas' />        
      <div className='FormTask'>
        
        <input className='box' type="text" id='name' required placeholder='Nombre de la tarea' />
        <input className='box' type="textArea" id='descript' placeholder='Descripcion' />
        <input className='box' type="date" id="date" name="fecha"></input>
        <input className='box' type="time" id="hour" name="fecha"></input>
         <button >Agregar</button>
      </div>
      
      <div className='listTask'>
        {/* baseDatos = [
        { name:'Estudiar' , descript:'curso de react', date:'15/4/', hour:'6:00 pm"},
         { name:'Enseñar' , descript:'curso de java', date:'15/4/', hour:'6:00 pm'} 
        ] */}   
        
         <Tasklist list={ list } /> 
      
      </div>
        <script src="js/main.js"></script>
    </div>
  )
}

export default App
