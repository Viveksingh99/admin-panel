import React from 'react'
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import Users from './pages/users/Users';
import NewUser from './pages/NewUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct'
function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<UserList />} />
          <Route exact path="/users/:usersId" element={<Users />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/newProduct" eleIment={<NewProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
