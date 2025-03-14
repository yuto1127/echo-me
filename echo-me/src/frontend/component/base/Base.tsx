'use client';

import React, { useEffect, useState, useMemo } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                クリック
            </button>
        </div>
    );
};

export default App;