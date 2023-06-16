import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import BookContextProvider from './context/BookContext';
import Addbook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import UserContextProvider from './context/UserContext';
import Users from './components/Users';

function App() {

    return (
        <UserContextProvider>
            <BookContextProvider>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/books' element={<Books />}></Route>
                    <Route path='/add' element={<Addbook />}></Route>
                    <Route path='/update/:id' element={<UpdateBook />}></Route>
                    <Route path='/users' element={<Users />}></Route>
                </Routes>
            </BookContextProvider>
        </UserContextProvider>
    )
}

export default App
