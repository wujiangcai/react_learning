// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// 设置带有默认值的上下文
const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { }
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 增强型useAuth钩子，包含错误检查
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth必须在AuthProvider组件内使用');
    }
    return context;
};