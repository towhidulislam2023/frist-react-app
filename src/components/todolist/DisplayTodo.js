import React from 'react';
import ShowUi from './ShowUi';

const DisplayTodo = (props) => {
    // console.log(props.data);
    return (
        <div>
            {
                props.data.map(data=><ShowUi key={data.id} todo={data}></ShowUi>)
            }
            
        </div>
    );
};

export default DisplayTodo;