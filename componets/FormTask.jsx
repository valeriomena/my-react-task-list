import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react';
import { DataTask } from '../componets/ContexTask'
import { nanoid } from 'nanoid'

function FormTaks() {
  const { ListTask, setListTask } = useContext(DataTask);  
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => { 
  const newData = {
      id: nanoid(), // Generar un ID único
      ...data
    };
    setListTask([...ListTask, newData])
    console.log(ListTask);  
  }
  return (
    <div className="FormTask" >
       <form className='registro' onSubmit={handleSubmit(onSubmit)}>
          <input className='box' type="text" {...register('name')} id='name' required placeholder='Nombre de la tarea' />
          <textarea className='box' type="textArea" {...register('descript')} id='descript' placeholder='Descripcion' />
          <input className='box' type="date" {...register('date')} id="date" name="date"></input>
          <input className='box' type="time" {...register('hour')} id="hour" name="hour"></input>
          <button type="submit">
            <span>
              <FontAwesomeIcon icon={faListCheck} />
            </span>
          </button>
        </form>
    </div>
    );
}
export default FormTaks;    