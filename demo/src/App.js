
import './App.css';
import './Pages/login.css'
import './Pages/register.css'
import './Pages/Pages.css'
import './Pages/Admin/Products/product.css'
import './Pages/Admin/Admin.css'
import './Pages/User/user.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import DashBorad from './Pages/Admin/DashBorad';
import Category from './Pages/Admin/Category/Category';
import AddCategory from './Pages/Admin/Category/AddCategory';
import Products from './Pages/Admin/Products/Products';
import AddPRoducts from './Pages/Admin/Products/AddPRoducts';
import Home from './Pages/User/Home';
import Userproduct from './Pages/User/Userproduct';
import Cart from './Pages/User/Cart';

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/admin/dashboard' element={<DashBorad/>}/>
          <Route path='/admin/category' element={<Category/>}/>
          <Route path='/admin/Addcategory' element={<AddCategory/>}/>
          <Route path='/admin/Products' element={<Products/>}/>
          <Route path='/admin/AddProducts' element={<AddPRoducts/>}/>

          {/* USER  */}

          <Route path='/home' element={<Home/>}/>
          <Route path='/product' element={<Userproduct/>}/>
          <Route path='/cart' element={<Cart/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
