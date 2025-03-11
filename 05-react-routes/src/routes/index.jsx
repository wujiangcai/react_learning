import { Routes, Route, Outlet } from 'react-router-dom';
import Login from '../pages/dashboard/Login';
import BlogList from '../components/BlogList';
import About from '../pages/About';
import Book from '../pages/Book';
import BlogDetails from '../components/BlogDetails';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/dashboard/Dashboard';
import Setting from '../pages/dashboard/Setting';
import Profile from '../pages/dashboard/Profile';
import Fans from '../pages/dashboard/profile/Fans';
import Follow from '../pages/dashboard/profile/Follow';
import NavBar from '../components/NavBar';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<BlogList />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/:bookId" element={<Book />} />
        <Route path="/blog/:blogIndex" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Fans />} />
            <Route path="fans" element={<Fans />} />
            <Route path="follow" element={<Follow />} />
          </Route>
          <Route path="setting" element={<Setting />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
