import React, { useEffect, useContext } from "react";
import NewTask from "./NewTask";
import useTask from '../hooks/useTask'; 
import { DataTask } from '../componets/ContexTask';

function Tasklist() { 
    const { ListTask, setListTask, loggedInUser, setLoggedInUser } = useContext(DataTask);
    // Utiliza el hook useTask
    const [handleDeleteClick, handleSaveClick, handleCheckboxChange] = useTask();

    // Utiliza useEffect para obtener la lista de tareas desde la API
    useEffect(() => {
    fetch("http://localhost:27017/api/task/")
        .then((response) => response.json())
        .then((data) => {
            const tasksForUser = data.filter(task => task.responsible === loggedInUser?.name);

            if (tasksForUser.length === 0) {
                setListTask([{ name: "No hay tareas asignadas para este usuario" }]);
            } else {
                setListTask(tasksForUser);
            }
        })
        .catch((error) => {
            console.error("Error fetching tasks:", error);
        });
    }, [setListTask, loggedInUser]);

    return (
        <ul>
            {ListTask.map((task) => (
                <NewTask
                    key={task._id}
                    id={task._id}
                    doneTask={task.doneTask}
                    name={task.name}
                    descript={task.descript}
                    date={task.date}
                    hour={task.hour}
                    email={task.email}
                    handleDeleteClick={() => handleDeleteClick(task._id)}
                    handleSaveClick={() => handleSaveClick(task._id, task.name, task.date, task.hour)}
                    handleCheckboxChange={(e) => handleCheckboxChange(task._id, e)}
                />
            ))}
        </ul> 
    );
}

export default Tasklist;
