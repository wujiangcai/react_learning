import React from 'react';
import blogs from "../data/blog";
import { Link } from 'react-router-dom';
import './BlogList.css'; // 引入样式文件

const BlogList = () => {
    return (
        <div className="blog-list-container">
            <h2 className="blog-list-title">Blog List</h2>
            <ul className="blog-list">
                {blogs.map((blog, index) => (
                    <li key={index} className="blog-item">
                        <Link to={`/blog/${index}`} className="blog-link">
                            <div className="blog-item-content">
                                <img src={blog.image} alt={blog.title} className="blog-item-image" />
                                <div className="blog-item-details">
                                    <h3 className="blog-item-title">{blog.title}</h3>
                                    <p className="blog-item-description">{blog.content.substring(0, 100)}...</p>
                                    <div className="blog-item-meta">
                                        <span className="author">By {blog.author}</span>
                                        <span className="date">{blog.date}</span>
                                        <span className="likes">Likes: {blog.likes}</span>
                                    </div>
                                    <div className="blog-item-tags">
                                        {blog.tags.map((tag, index) => (
                                            <span key={index} className="blog-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
