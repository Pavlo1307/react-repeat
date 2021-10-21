const ListTodos = ({todos, onChangeTodo, onDelete}) => {
    console.log(todos, 'todos')
    return (
        <div>
            <br/>
            {todos.map(value => (
                <div>
                    <div>
                        {value.title} - {value.description}
                    </div>
                    <span>Is completed? : {value.completed.toString()}</span>
                    <div>Created At: {new Date(value.createdAt).toDateString()}</div>
                    <br/>
                    <button onClick={()=>onChangeTodo(value.id, value.completed)}>change</button>
                    <button onClick={()=>onDelete(value.id)}>delete</button>
                </div>
            ))}
        </div>
    )
}
export default ListTodos;
