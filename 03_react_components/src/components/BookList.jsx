import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onDelete, onSelect, onEdit }) => {
  return (
    <div>
      <h2>图书列表</h2>
      <ul>
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            onDelete={onDelete}
            onSelect={onSelect}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
