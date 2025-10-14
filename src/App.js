import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element={<IndexPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
