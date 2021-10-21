

export const addTodos = (payload)=> ({ type: 'ADD_TODOS', payload: payload });
export const pushTodos = (payload)=> ({ type: 'PUSH_TODO', payload: payload });
export const changeTodos = (payload)=> ({ type: 'CHANGE_TODO', payload: payload });
export const deleteTodo = (payload)=> ({ type: 'DELETE_TODO', payload: payload });
