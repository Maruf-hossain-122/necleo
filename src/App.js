import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
      <Dashboard isSidebarVisible={isSidebarVisible} />
    </div>
  );
}

export default App;
