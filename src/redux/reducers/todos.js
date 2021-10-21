const initialState = {
    todos: [],
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TODOS': {
            return {...state, todos: action.payload}
        }
        case 'PUSH_TODO': {
            return {...state, todos: [...state.todos, action.payload]}
        }
        case 'CHANGE_TODO': {
            const found = state.todos.find(todo => todo.id === action.payload.id)
            found.completed = action.payload.completed
            return {...state}
        }
        case 'DELETE_TODO': {
            return {...state, todos: [...state.todos.filter(todo => todo.id !== action.payload)]}
        }
        default:
            return state
    }
}
