
import './App.css';
import Nav from './componnent/Nav';
import { Routes, Route } from 'react-router-dom'
import Login from './componnent/Login';
import Admin from './componnent/Admin';
import Dashboard from './componnent/Dashboard';
import Product from './componnent/Product';
import Users from './componnent/Users';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Nav />} />
      </Routes>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route element={<Admin />}>
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/user' element={< Product />} />
          <Route path='/product' element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
