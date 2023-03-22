function NewTask(props) { 
    return (
        <div className="TaskStyle">
            <input type="radio"></input>
            <label>{props.name}</label>
            <p>{ props.descript}</p>
            <label>{props.date}</label>
            <label>{props.hour}</label>
            <button> Borrar</button>
            <button>Editar</button>
        </div>
    );

}
export default NewTask;