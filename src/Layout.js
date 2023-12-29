import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <footer>This is Footer</footer>
        </div>
    );
};

export default Layout;