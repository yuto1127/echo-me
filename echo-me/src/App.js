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

// import logo from './logo.svg';
// import './App.css';

// const App =() => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
