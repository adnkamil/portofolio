import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Home/>
      </main>
      <footer id="Footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
