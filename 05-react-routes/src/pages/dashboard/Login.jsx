// Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../pages/Login.css';
import { useAuth } from '../../context/AuthContext';

const users = [
    { username: 'zhangsan', password: '123456', name: '张三', age: 25, avatar: 'https://cwj-my.oss-cn-beijing.aliyuncs.com/images/2025-03-08/0bab0da9-caae-41ce-bde5-318ad877b59c_v2-60c254dd8ebe57779d3ba359ff1fc321_r.jpg?x-oss-credential=LTAI5tR4DpkiQ6UMcoKECVtm%2F20250311%2Fcn-beijing%2Foss%2Faliyun_v4_request&x-oss-date=20250311T070248Z&x-oss-expires=32400&x-oss-signature-version=OSS4-HMAC-SHA256&x-oss-signature=84b821d12adcc57b632c40e8406c66953fef06a97b6a094e41f50b8ba822821e' },
    { username: 'lisi', password: '654321', name: '李四', age: 30 }
];

const Login = () => {
    const navigate = useNavigate();
    const { user, login } = useAuth();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) navigate('/');
    }, [user, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const foundUser = users.find(u =>
            u.username === formData.username &&
            u.password === formData.password
        );

        if (foundUser) {
            login(foundUser);
            navigate('/');
        } else {
            setError('用户名或密码错误');
        }
    };

    return (
        <div className="login-container">
            <h2>用户登录</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>用户名</label>
                    <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>密码</label>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit" className="login-button">登 录</button>
            </form>
        </div>
    );
};

export default Login;