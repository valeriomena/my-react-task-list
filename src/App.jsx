import { useState } from 'react'
import HeadTitle from '../componets/HeadTitle'
import Tasklist from '../componets/TaskList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faListCheck} from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { register, handleSubmit } = useForm();
  const list = [
         { name:'Estudiar' , descript:'curso de react', date:'15/4/', hour:'6:00 pm'},
         { name:'Enseñar' , descript:'curso de java', date:'15/4/', hour:'6:00 pm'} 
  ]
  const [baseDatos, setArreglo] = useState(list)
  console.log(baseDatos)
 
  const onSubmit = (data) => { 
    console.log(data);
    setArreglo([...baseDatos, data])
    console.log('esta es la base de datos'+baseDatos)
  }
  return (
    <div className="App">
      <HeadTitle titulo='lista de tareas' /> 
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='FormTask'>
        
        <input className='box' type="text" {...register('name')} id='name' required placeholder='Nombre de la tarea' />
        <textarea className='box' type="textArea" {...register('descript')} id='descript' placeholder='Descripcion' />
        <input className='box' type="date" {...register('date')} id="date" name="date"></input>
        <input className='box' type="time" {...register('hour')} id="hour" name="hour"></input>
        
        <button type="submit">
          <span>
            <FontAwesomeIcon icon={faListCheck} />
          </span>
        </button>
        
      </div>
      </form>      
      <div className='listTask'>
       
         <Tasklist list={ baseDatos } /> 
      
      </div>
        <script src="js/main.js"></script>
    </div>
  )
}

export default App
