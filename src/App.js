import React from 'react';

import { Header, Brands, About, Contact, Footer } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <Header />
      <Brands />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
