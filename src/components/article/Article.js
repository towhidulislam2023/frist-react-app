import React from 'react';
import Mobile from '../mobile/Mobile';
import './Article.css'
const Article = () => {
    const style={
        color:"red",
        border:"1px solid black",
        backgroundColor:"yellow"
    }
    return (
        <div className='blog'>
            <article>
                <h2 style={style}>IS Bangladesh Rich?</h2>
                <p style={{color:'red', fontSize:"20px",backgroundColor:"lightblue"}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum consectetur sapiente dolore debitis est, reprehenderit incidunt repellendus placeat, amet sint qui animi et suscipit corporis. Enim id maxime veritatis esse!
                </p>
                <a href='/ban'>Visit Bangladesh</a>
                <div>
                    <Mobile></Mobile>
                </div>
            </article>
            
        </div>
    );
};

export default Article;