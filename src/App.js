import React, { useState } from 'react'
import './index.css'
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { Routes } from './components/Routes.jsx';

const App = () => {
    const [darkTheme, setDarkTheme ] = useState(false);
    // {darkTheme? 'dark': ''}
  return (
    <div className={darkTheme ? 'dark' : ' '}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100  min-h-screen"> 
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />

      </div>
    </div>
  )
}

export default App