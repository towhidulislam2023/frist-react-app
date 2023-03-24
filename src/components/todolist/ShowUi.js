import React from 'react';

const ShowUi = (props) => {
    // console.log(props.todo);
    const {title,id,completed}=props.todo
    // console.log(userId);
    return (
        <div style={{display:"flex",gap:'10px', alignItems:"center",border:"2px solid black",margin:"20px",padding:'20px',background:"lightblue",borderRadius:"15px"}}>     
            <p>{id}</p>
            <h1>{title}</h1> 
            <p>{completed?"Done":"UNDONE"}</p>

        </div>
    );
};

export default ShowUi;