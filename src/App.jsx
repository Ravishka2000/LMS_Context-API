import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import BookContextProvider from './context/BookContext';

function App() {

    return (
        <BookContextProvider>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/books' element={<Books />}></Route>
            </Routes>
        </BookContextProvider>
    )
}

export default App
