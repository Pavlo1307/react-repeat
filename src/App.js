import {useSelector, useDispatch} from "react-redux";
import {createRef, useEffect, useState} from "react";
import {todosReducer} from "./redux/reducers/todos";
import CreateTodos from "./todos/CreateTodos";
import {addTodos, changeTodos, deleteTodo, pushTodos} from "./redux/actionTypes";
import ListTodos from "./todos/ListTodos";

function App() {
    console.log('ddddd')
    const { todos }  = useSelector(store => store.todosReducer)
    const dispatch = useDispatch();

    const fetchTodos = async () => {
        const res = await fetch('http://localhost:8888/get-todos')
        const data = await res.json();

        dispatch(addTodos(data))
    }

    useEffect(() => {
        fetchTodos();
    }, [])


    const onTodoCreate = async (title, description) => {
        const res = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();

        dispatch(pushTodos(data))

    }

    const onChangeTodo = async (id, completed) =>{
        const res = await fetch('http://localhost:8888/update-todo/'+ id, {
            method: 'PATCH',
            body: JSON.stringify({completed: !completed}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        dispatch(changeTodos(data));

    }

    const onDelete = async (id) =>{
        const res = await fetch('http://localhost:8888/delete-todo/'+id, {
            method: "DELETE",
        });
        dispatch(deleteTodo(id))

    }

    return (
        <div>
            <CreateTodos onSubmit={onTodoCreate}/>
            <ListTodos todos={todos} onChangeTodo={onChangeTodo} onDelete={onDelete}/>
        </div>

    );
};

export default App;
