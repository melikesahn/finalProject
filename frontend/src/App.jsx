import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './home/Home';
import Shop from './shop/Shop';
import About from './components/About';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import SingleBook from './shop/SingleBook';
import DashboardLayout from './dashboard/DashboardLayout';
import Dashboard from './dashboard/Dashboard';
import UploadBooks from './dashboard/UploadBooks';
import Managebooks from './dashboard/Managebooks';
import EditBooks from './dashboard/EditBooks';
import MyFooter from './components/MyFooter';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Logout from './components/Logout';

function App() {
  const location = useLocation();

  const isAuthPage = location.pathname === '/sign-up' || location.pathname === '/login';

  return (
    <div id="root">
      {!isAuthPage && <Navbar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book/:id" element={<SingleBook />} />
          <Route path="/admin/dashboard" element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="upload" element={<UploadBooks />} />
            <Route path="manage" element={<Managebooks />} />
            <Route path="edit-books/:id" element={<EditBooks />} />
          </Route>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
         
        </Routes>
      </main>
      {!isAuthPage && <MyFooter className="footer" />}
    </div>
  );
}

export default App;
