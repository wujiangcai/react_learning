// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="nav-brand">我的博客</Link>
                <Link to="/about" className="nav-link">关于</Link>
                <Link to="/dashboard" className="nav-link">仪表盘</Link>
            </div>
            <div className="nav-right">
                {user ? (
                    <div className="user-info-container">
                        <img
                            src={user.avatar || 'default-avatar.jpg'} // 默认头像如果没有提供
                            alt="User Avatar"
                            className="user-avatar"
                        />
                        <span className="user-info">欢迎，{user.name} ({user.age}岁)</span>
                        <button onClick={logout} className="logout-button">注销</button>
                    </div>
                ) : (
                    <Link to="/login" className="nav-link">登录</Link>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
