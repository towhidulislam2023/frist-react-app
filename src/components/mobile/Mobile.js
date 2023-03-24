import React, { useState } from 'react';

const Mobile = () => {
    const [betteryHealth,setBetteryHealth]=useState(100)

    const decreaseBetteryHealth=()=>{
        if (betteryHealth>0) {
               setBetteryHealth(betteryHealth-10);
        }
    }
    return (
        <div>
            <h1>Bettery Health:{betteryHealth}</h1>
            <button onClick={decreaseBetteryHealth}>Battery down</button>
        </div>
    );
};

export default Mobile;