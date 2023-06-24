import { useContext } from 'react';
import { DataTask } from '../componets/ContexTask'
import NewTask from "./NewTask";
function Tasklist() { 
    const { ListTask } = useContext(DataTask);
    return (
        <ul>
            {ListTask.map((task) => (
                <NewTask key={task.id} doneTask={task.doneTask} name={task.name} descript={task.descript} date={task.date} hour={task.hour} email={ task.email} />
            ))}
        </ul>
    );
}
export default Tasklist;