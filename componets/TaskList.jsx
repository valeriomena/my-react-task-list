import NewTask from "./NewTask";
function Tasklist(props) { 
    const { list } = props;
    return (
        <ul>
            {list.map((task) => (
                <NewTask id={ task.id} name={task.name} descipt={task.descript} date={task.date} hour={task.hour} />
            ))}
        </ul>
    );
}
export default Tasklist;