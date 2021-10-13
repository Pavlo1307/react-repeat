import {useEffect, useReducer, useState} from "react";
import {getUsers} from "./components/service/api";
import Users from "./components/Users";

function reducer (state, action){
    switch (action.type){
        case 'setUsers':
            return {
                ...state,
                users: action.payload
            }

    }
  return state;
}

function App() {
  let [{ users }, dispatch] = useReducer(reducer,{users: []});


  useEffect(()=>{
      getUsers().then(({data}) => dispatch({ type: 'setUsers', payload: data }));
  },[]);



  return (
    <div>

        <button onClick={ ()=> dispatch({ type : 'INC_B', payload:1 }) }>click B</button>

        <Users  items={users}/>

    </div>
  );
}

export default App;
