import NewTask from "./NewTask";
import useTask from '../hooks/useTask';
import { useContext } from "react";
import { DataTask } from "./ContexTask";

function Tasklist() { 
    const datahook = useTask();
    const { ListTask } = useContext(DataTask);    /* const ListTask = datahook[0]; */
    const handleDeleteClick = datahook[2];
    const handleSaveClick = datahook[3];
    const handleCheckboxChange = datahook[4];
    return (
        <ul>
            {ListTask.map((task) => (
                <NewTask id={task.id} doneTask={task.doneTask} name={task.name} descript={task.descript} date={task.date} hour={task.hour} email={task.email} handleDeleteClick={handleDeleteClick} handleSaveClick={handleSaveClick} handleCheckboxChange={ handleCheckboxChange} />
            ))}
        </ul> 
    );
}
export default Tasklist;