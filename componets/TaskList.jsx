import { useContext } from 'react';
import { DataTask } from '../componets/ContexTask'
import NewTask from "./NewTask";
function Tasklist() { 
    const { ListTask } = useContext(DataTask);
    const handleDeleteTask = (nameTaskDelete) => { 
        console.log(nameTaskDelete);
    };
    return (
        <ul>
            {ListTask.map((task) => (
                <NewTask id={task.id} name={task.name} descript={task.descript} date={task.date} hour={task.hour} onDeleteTaskClick={ handleDeleteTask} />
            ))}
        </ul>
    );
}
export default Tasklist;