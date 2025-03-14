'use client';
import React,{useEffect, useState,useMemo} from 'react';

const Base = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
        <h2>count: {count}</h2>
        <button
        onclick={() => setCount(count + 1)}>
            クリック
        </button>
        </div>
    )
}

export default Base