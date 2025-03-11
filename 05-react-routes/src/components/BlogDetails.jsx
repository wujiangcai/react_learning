import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from "../data/blog";
import './BlogDetails.css'; // 引入样式文件

const BlogDetails = () => {
    const { blogIndex } = useParams();
    const blog = blogs[blogIndex];

    return (
        <div className="blog-details-container">
            <h2 className="blog-details-title">Blog Details</h2>
            <div className="blog-detail">
                <h3 className="blog-detail-heading">{blog.title}</h3>
                <div className="blog-detail-meta">
                    <span className="author">By {blog.author}</span>
                    <span className="date">{blog.date}</span>
                    <span className="likes">Likes: {blog.likes}</span>
                </div>
                <img src={blog.image} alt={blog.title} className="blog-detail-image" />
                <p className="blog-detail-content">{blog.content}</p>
                <div className="blog-detail-tags">
                    {blog.tags.map((tag, index) => (
                        <span key={index} className="blog-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
