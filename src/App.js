import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
