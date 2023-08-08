import { DataTask } from './ContexTask';
import { useContext } from 'react';

const TaskCard = ({ id }) => {
  const { ListTask } = useContext(DataTask);
  const task = ListTask.find((task) => task.id === id);
  console.log(task.doneTask);
  if (!task) {
    return <div>No se encontró la tarea con el ID proporcionado.</div>;
  }

  return (
    <div className='TaskCard'>
      <p className={task.doneTask ? '' : 'red'}>{task.doneTask ? 'Task completed' : 'Pending task'}</p>
      <p>Name: {task.name}</p>
      <p>Descript: {task.descript}</p>
      <p>Date: {task.date}</p>
      <p>Hour: {task.hour}</p>
      <p>Maker: {task.email}</p>
      <p>Responsible: {task.responsible}</p>
    </div>
  );
};

export default TaskCard;
