import logo from './logo.svg';
import './App.css';
import './Pages/Admin/leftside.css';
import './Pages/login.css'
import './Pages/register.css'
import './Pages/header.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import DashBorad from './Pages/Admin/DashBorad';
import Category from './Pages/Admin/Category/Category';


function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/admin/dashboard' element={<DashBorad/>}/>
          <Route path='/admin/category' element={<Category/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
