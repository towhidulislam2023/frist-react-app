import React, { useEffect, useState } from 'react';
import DisplayTodo from './DisplayTodo';

const Loadtodo = () => {
    const [todolist,setTodolist]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>setTodolist(data))
    },[])
    return (
        <div>
            <h1>Total Todo : {todolist.length}</h1>
            <DisplayTodo data={todolist}></DisplayTodo>
            
        </div>
    );
};

export default Loadtodo;