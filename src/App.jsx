import React from 'react'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import Success from './pages/Success'
import { useSelector } from 'react-redux'

const App = () => {
    const user = useSelector(state => state.user.currentUser);
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} ></Route>
                <Route path="/products" element={<ProductList />} >
                    <Route path=":category" element={<ProductList />}></Route>
                </Route>
                <Route path="/product/:id" element={<Product />} ></Route>
                <Route path="/cart" element={<Cart />} ></Route>
                <Route path="/login" element={
                    user ? <Navigate replace to="/" /> : <Login />
                } ></Route>
                <Route path="/register" element={
                    user ? <Navigate replace to="/" /> : <Register />
                } ></Route>
                <Route path="/success" element={<Success/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App