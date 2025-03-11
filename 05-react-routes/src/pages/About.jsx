// About.js
import React from 'react';
import { useAuth } from '../context/AuthContext';

const About = () => {
  const { user } = useAuth();

  return (
    <div className="about-container">
      <h2>个人信息</h2>
      {user && (
        <div className="user-info">
          <p>当前登录用户：{user.name}</p>
          <p>年龄：{user.age}</p>
        </div>
      )}
    </div>
  );
};

export default About;