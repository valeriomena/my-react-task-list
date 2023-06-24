import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { DataTask } from '../componets/ContexTask';
import { nanoid } from 'nanoid';

const schema = yup.object().shape({
  name: yup.string().required('El nombre de la tarea es requerido'),
  date: yup.date(),
});

function FormTaks() {
  const { ListTask, setListTask } = useContext(DataTask);
  const { dataUsers } = useContext(DataTask);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
  const newData = {
    id: nanoid(),
    ...data,
    date: data.date.toLocaleDateString(), // Convertir el objeto Date a una cadena de texto
  };
  setListTask([...ListTask, newData]);
  console.log(ListTask);
};
  return (
    <div className="FormTask">
      <form className='registro' onSubmit={handleSubmit(onSubmit)}>
        <input className='box' type="text" {...register('name')} id='name' placeholder='Nombre de la tarea' />
        {errors.name && <span className="error">{errors.name.message}</span>}
        <textarea className='box' type="textArea" {...register('descript')} id='descript' placeholder='Descripción' />
        <input className='box' type="date" {...register('date')} id="date" name="date" />
        {errors.date && <span className="error">{errors.date.message}</span>}
        <input className='box' type="time" {...register('hour')} id="hour" name="hour" />
        <p>{dataUsers.email}</p>
        <button className='buttonform' type="submit">
          <span>
            <FontAwesomeIcon icon={faListCheck} />
          </span>
        </button>
      </form>
    </div>
  );
}

export default FormTaks;