import React from "react";
import "./Header.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
const page = () => {
  return (
    <>
      <div className="left-header-elements">
       <a href="/"> <span> READSTER</span></a>
        <a href="/books">Books</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="">Contact us</a>
        <div className="right-header-elements">
          <div className="search-bar"><IoSearchOutline />Search</div>
          <div className="header-cart-icon"><IoBag /></div>
        </div>
      </div>
    </>
  );
};
export default page;
