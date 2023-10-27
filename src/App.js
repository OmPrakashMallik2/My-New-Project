import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Compo/Login';

function App() {
  return (
    <div className="bg-black h-screen p-5">
      <h1 className=' p-5 cursor-not-allowed rounded-md bg-gradient-to-r from-gray-800 to-green-600
       text-blue-50 font-black  text-2xl text-center'>School Management System</h1>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

