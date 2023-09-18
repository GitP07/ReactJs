import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SingUp from './SingUp';
import BookDetail from './bookDetail.js';
import BooksLists from './MyBooksList';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/singUp' element={<SingUp />}></Route>
        <Route path='/booksList' element={<BooksLists />}></Route>
        <Route path='/bookDetail/:id' element={<BookDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
