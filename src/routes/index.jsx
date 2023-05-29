import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home=()=>{
    const router = useNavigate();
    useEffect(()=>{
        router("/uploads/646c8fe1f277e7aab0151e0d");
    });
    return(
        <>
        </>
    )
}

export default Home;