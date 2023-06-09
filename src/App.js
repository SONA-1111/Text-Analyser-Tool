import React from 'react';
import "./App.scss";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import MainLogic from './components/MainLogic';
function App() {
  return (
    <>
      <NavBar />
      <div className="small-container">
        <div className="main-app">
          <MainLogic />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;