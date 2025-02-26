import React, { useState } from 'react';

const BookItem = ({ book, onDelete, onSelect, onEdit }) => {
  const { title, author, year, id } = book;

  // 编辑状态的控制
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newAuthor, setNewAuthor] = useState(author);
  const [newYear, setNewYear] = useState(year);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleSelect = () => {
    onSelect(book);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEdit = () => {
    const updatedBook = {
      ...book,
      title: newTitle,
      author: newAuthor,
      year: newYear,
    };
    onEdit(updatedBook);
    setIsEditing(false); // 保存后退出编辑模式
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="新书名"
          />
          <input
            type="text"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
            placeholder="新作者"
          />
          <input
            type="text"
            value={newYear}
            onChange={(e) => setNewYear(e.target.value)}
            placeholder="新出版年份"
          />
          <button onClick={handleSaveEdit}>保存</button>
          <button onClick={handleEditToggle}>取消</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>作者：{author}</p>
          <p>出版年份：{year}</p>
          <button onClick={handleSelect}>查看详情</button>
          <button onClick={handleEditToggle}>编辑</button>
          <button onClick={handleDelete}>删除</button>
        </div>
      )}
    </li>
  );
};

export default BookItem;
