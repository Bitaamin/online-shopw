
import './App.css';
import Nav from './componnent/Nav';
import { Routes, Route } from 'react-router-dom'
import Login from './componnent/Login';
import Admin from './componnent/Admin';
import Dashboard from './componnent/Dashboard';
import Product from './componnent/Product';
import Users from './componnent/Users';
import Category from "./componnent/Category"
import Products from "./componnent/Products"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Nav />} />

      </Routes>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route element={<Admin />}>

          <Route path='/admin' element={<Dashboard />} />
          <Route path='/product' element={<Product />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Products />} />
          <Route path='/user' element={<Users />} />
          <Route path='/category' element={<Category />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
