import React, { useState } from 'react';

const BookInput = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleAdd = () => {
    const newBook = {
      id: Date.now(), // 使用时间戳作为ID
      title,
      author,
      year,
    };
    onAddBook(newBook);
    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <div>
      <h2>添加新图书</h2>
      <input
        type="text"
        placeholder="书名"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="作者"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="出版年份"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={handleAdd}>添加图书</button>
    </div>
  );
};

export default BookInput;
