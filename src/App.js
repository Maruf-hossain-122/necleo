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
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
      <Dashboard isSidebarVisible={isSidebarVisible} />
    </div>
  );
}

export default App;
