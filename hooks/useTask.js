import { useContext } from 'react';
import { DataTask } from '../componets/ContexTask';

const useTask = () => {
  const { ListTask, setListTask } = useContext(DataTask);  
    
  const handleDeleteClick = (id) => {
    console.log(id);
    const updatedDeleteList = ListTask.filter((task) => task.id !== id);
      console.log(updatedDeleteList);
    setListTask(updatedDeleteList);
  };

  const handleSaveClick = (id, editedName, editeddate, editedhour) => {
    setListTask((prevListTask) => {
      const updatedList = [...prevListTask];
      const taskIndex = updatedList.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        updatedList[taskIndex] = {
          ...updatedList[taskIndex],
          name: editedName,
          hour: editedhour,
          date: editeddate,
        };
      }
      return updatedList;
    });
    
  };

  const handleCheckboxChange = (id, e ) => {
      
      setListTask((prevListTask) => {
      const updatedList = [...prevListTask];
      const taskIndex = updatedList.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        updatedList[taskIndex] = {
          ...updatedList[taskIndex],
          doneTask: e.target.checked,
        };
      }
        console.log(updatedList);  
      return updatedList;
    });
    
  };

  return [ListTask, setListTask, handleDeleteClick, handleSaveClick, handleCheckboxChange];
};
export default useTask
