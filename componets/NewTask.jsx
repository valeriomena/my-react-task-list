import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function NewTask(props) {
    const { name, onDeleteTaskClick } = props;
    const [checked, setChecked] = useState(false);
    const handleClick = () => { 
        onDeleteTaskClick(name);
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
            <button onClick={handleClick}>
                <span>
                    <FontAwesomeIcon className="iconSmall" icon={faTrash} />
                </span>
            </button>
        </div>
    </div>
    );
}
export default NewTask;