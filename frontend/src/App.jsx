import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        {/* Main content goes here */}
      </div>
      <Footer />
    </div>
  );
}

export default App
