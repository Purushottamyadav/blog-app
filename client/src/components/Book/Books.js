import React, { useEffect, useState } from "react";
import "./Blog.css";
import axios from "axios";
import Blog from "./Blog";
import Header from "../Header/header";
import "./Blog.css";
const URL = "http://localhost:3002/blogs";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Blogs = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div className="container">
        <Header/>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Blog book={book} />
            </li>

          ))}
      </ul>
    </div>
  );
};

export default Blogs;