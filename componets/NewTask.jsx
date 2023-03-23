import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
function NewTask(props) { 
    return (
        <div className="TaskStyle">
            <input className='box' type="radio"></input>
            <b>
            <label className='taskName'>{props.name}</label>
            </b>
            <p>{props.descript}</p>
            <label>{props.date}</label>
            <label>{props.hour}</label>
            <div className='icons'>
            <button> 
                <span>
                    <FontAwesomeIcon className="iconSmall" icon={faPenToSquare} />
                </span>
            </button>
            <button>
                <span>
                    <FontAwesomeIcon className="iconSmall" icon={faTrash} />
                </span>
            </button>
            </div>
        </div>
    );

}
export default NewTask;