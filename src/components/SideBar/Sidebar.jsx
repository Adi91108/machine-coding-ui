// Sidebar.js
import { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    

   {<div className={`sidebar ${isOpen ? 'open' : ''}`}>
   <button className="hamburger" onClick={toggleSidebar}>
        {isOpen?"✖": "☰" } 
      </button>
      <div className="menu">
        {/* Add your menu items here */}
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

    </div>}
    </>
  );
};

export default Sidebar;
