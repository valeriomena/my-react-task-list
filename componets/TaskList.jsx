import NewTask from "./NewTask";
function Tasklist(props) { 
    const { list } = props;
    const handleDeleteTask = (nameTaskDelete) => { 
        console.log(nameTaskDelete);
    };
    return (
        <ul>
            {list.map((task) => (
                <NewTask id={task.id} name={task.name} descript={task.descript} date={task.date} hour={task.hour} onDeleteTaskClick={ handleDeleteTask} />
            ))}
        </ul>
    );
}
export default Tasklist;