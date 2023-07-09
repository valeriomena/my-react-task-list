import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faFloppyDisk, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState, useEffect } from 'react';
import { DataTask } from '../componets/ContexTask';

function NewTask(props) {
  const { ListTask, setListTask } = useContext(DataTask);
  const { id, email, doneTask, name, descript, date, hour } = props;
  const [checked, setChecked] = useState(doneTask);
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedDescript, setEditedDescript] = useState(descript);

  useEffect(() => {
    setChecked(doneTask);
  }, [doneTask]);

  const handleDeleteClick = () => {
    const updatedDeleteList = ListTask.filter((task) => task.id !== id);
    setListTask(updatedDeleteList);
  };

  const handleUpdateClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setListTask((prevListTask) => {
      const updatedList = [...prevListTask];
      const taskIndex = updatedList.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        updatedList[taskIndex] = {
          ...updatedList[taskIndex],
          name: editedName,
          descript: editedDescript,
        };
      }
      return updatedList;
    });
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setEditedName(name);
    setEditedDescript(descript);
  };

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="TaskStyle">
      <input className="box" type="checkbox" checked={checked} onChange={handleCheckboxChange} />
      <b>
        <label
          className="taskName"
          style={{ textDecoration: checked ? 'line-through' : 'none', color: checked ? 'red' : 'black' }}
        >
          {editing ? (
            <input className="box" type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
          ) : (
            name
          )}
        </label>
      </b>
      <p style={{ textDecoration: checked ? 'line-through' : 'none' }}>
        {editing ? (
          <textarea className="box" value={editedDescript} onChange={(e) => setEditedDescript(e.target.value)} />
        ) : (
          descript
        )}
      </p>
      <label>{props.date}</label>
      <label>{props.hour}</label>
      <div className="icons">
        {editing ? (
          <>
            <button onClick={handleSaveClick}>
              <span>
                <FontAwesomeIcon className="iconSmall" icon={faFloppyDisk} />
              </span>
            </button>
            <button onClick={handleCancelClick}>
              <span>
                <FontAwesomeIcon className="iconSmall" icon={faRectangleXmark} />
              </span>
            </button>
          </>
        ) : (
          <>
            <button onClick={handleUpdateClick}>
              <span>
                <FontAwesomeIcon className="iconSmall" icon={faPenToSquare} />
              </span>
            </button>
            <button onClick={handleDeleteClick}>
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
