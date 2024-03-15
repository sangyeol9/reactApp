import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function R() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/notice' element={<Notice/>}/>
//         <Route path='/' element={<App/>} />
//         <Route path='/board/Board.js' element={<Board/>} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

root.render(
  
    <App/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
