import { useContext } from 'react';
import { DataTask } from '../componets/ContexTask';
import axios from 'axios';

const useTask = () => {
  const { ListTask, setListTask } = useContext(DataTask);

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:27017/api/task/${id}`);
      
      // Actualizar el estado local eliminando la tarea de la lista
      const updatedDeleteList = ListTask.filter((task) => task._id !== id); // Cambiar "id" por "_id"
      setListTask(updatedDeleteList);
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  const handleSaveClick = async (id, editedName, editeddate, editedhour) => {
    try {
      await axios.put(`http://localhost:27017/api/task/${id}`, {
        name: editedName,
        hour: editedhour,
        date: editeddate,
      });

      // Actualizar el estado local con los datos actualizados
      setListTask((prevListTask) => {
        const updatedList = prevListTask.map((task) => {
          if (task._id === id) { // Cambiar "id" por "_id"
            return {
              ...task,
              name: editedName,
              hour: editedhour,
              date: editeddate,
            };
          }
          return task;
        });
        return updatedList;
      });
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  };

  const handleCheckboxChange = async (id, checked) => {
    const updatedDoneTask = checked;

    try {
      // Hacer la petición HTTP PUT para actualizar la tarea con el _id especificado
      await axios.put(`http://localhost:27017/api/task/${id}`, {
        doneTask: updatedDoneTask,
      });

      // Actualizar el estado local con los datos actualizados
      setListTask((prevListTask) => {
        const updatedList = prevListTask.map((task) => {
          if (task._id === id) {
            return {
              ...task,
              doneTask: updatedDoneTask,
            };
          }
          return task;
        });
        return updatedList;
      });
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  };
  return [handleDeleteClick, handleSaveClick, handleCheckboxChange];
};

export default useTask;
