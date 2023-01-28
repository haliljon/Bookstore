import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import BooksContainer from './pages/BooksContainer';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BooksContainer />} />
        <Route exact path="/categories/*" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
