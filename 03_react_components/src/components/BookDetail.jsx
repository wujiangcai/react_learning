import React from 'react';

const BookDetail = ({ book }) => {
  const { title, author, year } = book;

  return (
    <div>
      <h2>图书详情</h2>
      <p><strong>书名：</strong>{title}</p>
      <p><strong>作者：</strong>{author}</p>
      <p><strong>出版年份：</strong>{year}</p>
    </div>
  );
};

export default BookDetail;
