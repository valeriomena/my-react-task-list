import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faFloppyDisk, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { useState  } from 'react';
import TaskCard from './TaskCard';

function NewTask(props) {
  const {
        id,
        email,
        doneTask,
        name,
        descript,
        date,
        hour,
        handleDeleteClick,
        handleSaveClick,
        handleCheckboxChange
    } = props;
  const [checked, setChecked] = useState(doneTask);
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editeddate, setediteddate] = useState(date);
  const [editedhour, seteditedhour] = useState(hour);
  const [editedDescript, setEditedDescript] = useState(descript);
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    setShowCard(!showCard);
  };
   
  const handleUpdateClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setEditedName(name);
    setEditedDescript(descript);
  };
  
  return (
    <div className="TaskStyle">
          <div className='tasklabels'>  
        <input className={`box ${showCard ? 'hidden' : ''}`} type="checkbox" checked={checked} onChange={(e) => { handleCheckboxChange(id, e.target.checked); setChecked(e.target.checked); }} />
        </div>
        <b>
          <div className='tasklabels'>
            <label
              className="taskName"
              style={{ textDecoration: checked ? 'line-through' : 'none', color: checked ? 'red' : 'black' }}
              onClick={handleClick}
            >
              {editing ? (
                <input className="box" type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
              ) : (
                name
              )}
            </label>
              <div className='taskcard'>{showCard && <TaskCard id={id}/>}</div>
          </div>
        </b>
        <div className={`tasklabels ${showCard ? 'hidden' : ''}`}>
            <p style={{ textDecoration: checked ? 'line-through' : 'none' }}>
              {editing ? (
                <input className='box' type="date" value={editeddate} id="date" name="date" onChange={(e) => setediteddate(e.target.value)} />
            ) : (
            date
            )}
            </p>
            <p style={{ textDecoration: checked ? 'line-through' : 'none' }}>
              {editing ? (
                <input className='box' type="time" value={editedhour} id="hour" name="hour" onChange={(e) => seteditedhour(e.target.value)}/>
            ) : (
            hour
            )}
            </p>
        </div>  
        <div className={`icons tasklabels ${showCard ? 'hidden' : ''}`}>
          {editing ? (
            <>
              <button onClick={() => { handleSaveClick(id, editedName, editeddate, editedhour); setEditing(false); }}>
                <span>
                  <FontAwesomeIcon className="iconSmall" icon={faFloppyDisk} />
                </span>
              </button>
              <button onClick={()=>handleCancelClick()}>
                <span>
                  <FontAwesomeIcon className="iconSmall" icon={faRectangleXmark} />
                </span>
              </button>
            </>
          ) : (
              <>
              <button onClick={()=>handleUpdateClick()} disabled={checked}>
                <span>
                  <FontAwesomeIcon className="iconSmall" icon={faPenToSquare} />
                </span>
              </button>
              <button onClick={()=>{console.log(id); handleDeleteClick(id);}}>
                <span>
                  <FontAwesomeIcon className="iconSmall" icon={faTrash} />
                </span>
              </button>
            </>
          )}
        </div>
    </div>
  );
}

export default NewTask;
