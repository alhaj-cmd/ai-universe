import React, { useEffect, useState } from 'react';

const Card = () => {
    const [data, setData] =  useState([]);
    useEffect(()=>{
        const loadData = async() => {
            const res =  await fetch(` https://openapi.programming-hero.com/api/ai/tools`)
            const data = await res.json();
            console.log(data.data.tools);
        }
        loadData()
    },[])
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Card;