import WelcomeClass from "./components/WelcomeClass";
import WelcomeFunc from "./components/WelcomeFunc";
import StudentInfo from "./components/StudentInfo";
import RandomName from "./components/RandomName";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Main from "./components/Main";
import Button from "./components/Button";
import UserPage from "./components/UserPage";
import Button1 from "./components/Button1";
import InputParent from "./components/InputParent";
import RegistPage from "./components/RegistPage";
// import React from "react";
import { Layout, Row, Col, Carousel } from "antd";
import NavBar2 from "./components/navbar/NavBar2";
import CustomCard from "./components/CustomCard";
import MyCard from "./components/myCard/MyCard";
import React, { useState } from 'react';
import BookItem from "./components/BookItem";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import BookInput from "./components/BookInput";
const { Content, Footer } = Layout;

const App = () => {
  const handleClick = () => {
    alert("点击了按钮！");
  };

  const handleClick1 = () => {
    alert("点击了按钮！！！");
  };
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const editBook = (updatedBook) => {
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
  };

  const selectBook = (book) => {
    setSelectedBook(book);
  };
  return (
    <>
      {/* <WelcomeClass name="React!!!" />
      <WelcomeFunc name="React!!!" /> */}
      {/* <StudentInfo
        name="张三"
        number="11"
        age="18"
        avatar="https://my-bucket-621.oss-cn-beijing.aliyuncs.com/bird/bird1.png"
      />

      <RandomName></RandomName> */}
      {/* <Header></Header>
      <Main></Main>
      <Footer></Footer> */}
      {/* <Button onClick={handleClick}></Button> */}
      {/* <UserPage></UserPage> */}
      {/* <Button1 onClick={handleClick1}></Button1> */}
      {/* <InputParent></InputParent> */}
      {/* <StudentInfo
        name="cwj"
        avatar="https://public-cdn-oss.mosoteach.cn/avatar/2023/2E/e37ec338466725ce05a5007f958fae99.jpg?v=1693560293&x-oss-process=style/s300x300"
        number={"123456"}
        age="18"
      /> */}
      {/* <RegistPage /> */}
      {/* <MyCard
        header={<h3>这是一张卡片</h3>}
        body={<h3>这是卡片的主体部分</h3>}
        footer={
          <h3>
            <button>点击</button>
            这是卡片的底部
          </h3>
        }
      />
    </> */}
     <div>
      <h1>图书管理系统</h1>
      <BookInput onAddBook={addBook} />
      <BookList
        books={books}
        onDelete={deleteBook}
        onSelect={selectBook}
        onEdit={editBook}
      />
      {selectedBook && <BookDetail book={selectedBook} />}
    </div>
    </>
  );
};

export default App;
