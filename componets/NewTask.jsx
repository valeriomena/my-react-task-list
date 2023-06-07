import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react';
import { DataTask } from '../componets/ContexTask'

function NewTask(props) {
    const { ListTask, setListTask } = useContext(DataTask);
    const { id } = props;
    const [checked, setChecked] = useState(false);
    const handleDeleteClick = () => {
    // Filtrar el array list y eliminar el objeto con el id correspondiente
        console.log(id);
    const updatedList = ListTask.filter(task => task.id !== id);
    // Actualizar el array list dentro del contexto DataTask
        setListTask(updatedList);
        console.log(ListTask);
  };
    return (<div className="TaskStyle" >
        <input className='box' type="checkbox" onChange={() => setChecked(!checked)}></input>
        <b>
            <label className='taskName' style={{ textDecoration: checked ? 'line-through' : 'none', color: checked ? 'red' : 'black' }}>{props.name}</label>
        </b>
        <p style={{ textDecoration: checked ? 'line-through' : 'none'}}>{props.descript}</p>
        <label>{props.date}</label>
        <label>{props.hour}</label>
        <div className='icons'>
            <button >
                <span>
                    <FontAwesomeIcon className="iconSmall" icon={faPenToSquare} />
                </span>
            </button>
            <button onClick={handleDeleteClick}>
                <span>
                    <FontAwesomeIcon className="iconSmall" icon={faTrash} />
                </span>
            </button>
        </div>
    </div>
    );
}
export default NewTask;