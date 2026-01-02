import React, { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Dashboard from './pages/Dashboard';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="app">
      <Header 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        searchOpen={searchOpen} 
        setSearchOpen={setSearchOpen} 
      />
      <Modal sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="content">
        <Dashboard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
