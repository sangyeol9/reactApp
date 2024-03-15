import Logo from './logo.svg'
import './App.css';
import Header from './layout/header';
import Board from './board/Board';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Header/>
    <img src = {Logo} alt='' className='App-logo'></img>
      <Routes> 
        <Route path='/board' element={<Board/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
