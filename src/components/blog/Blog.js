import React from 'react';

const Blog = (props) => {
    // console.log(props);
    return (
        <div className='blog'>
            <h1>Heading: {props.heading}</h1>
            <p>Heading: {props.author}</p>
        </div>
    );
};

export default Blog;