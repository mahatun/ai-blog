import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Post from './Pages/Post';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;