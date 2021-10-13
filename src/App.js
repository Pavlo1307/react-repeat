import {useEffect, useReducer, useState} from "react";
import {getUser, getUsers} from "./components/service/api";
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
  // let [{ users }, dispatch] = useReducer(reducer,{users: []});
  //
  // useEffect(()=>{
  //     getUsers().then(({data}) => dispatch({ type: 'setUsers', payload: data }));
  // },[]);
    let [users, setUsers] = useState([]);

    function showUsers () {
        getUsers().then(value => setUsers(value.data))
    }


  return (
    <div>

        {/*<div><button onClick={()=>showUserPosts(user.id)}>show posts</button></div>*/}

        <Users  items={users}/>

        <div><button onClick={()=>showUsers()}>show users</button></div>

    </div>
  );
};

export default App;
