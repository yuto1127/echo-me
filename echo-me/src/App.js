'use client';

import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="profile-container">
            <header className="profile-header">
                <h1>自己紹介</h1>
            </header>
            
            <main className="profile-content">
                <section className="profile-section">
                    <h2>基本情報</h2>
                    <div className="profile-info">
                        <p><strong>名前：</strong>山田太郎</p>
                        <p><strong>年齢：</strong>25歳</p>
                        <p><strong>職業：</strong>ソフトウェアエンジニア</p>
                    </div>
                </section>

                <section className="profile-section">
                    <h2>スキル</h2>
                    <ul className="skills-list">
                        <li>JavaScript / TypeScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>HTML / CSS</li>
                    </ul>
                </section>

                <section className="profile-section">
                    <h2>趣味</h2>
                    <p>プログラミング、読書、旅行</p>
                </section>
            </main>
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
