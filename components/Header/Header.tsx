import React from "react";
import "./Header.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
const page = () => {
  return (
    <>
      <div className="left-header-elements">
        <span>READSTER</span>
        <p>Books</p>
        <p>Shop</p>
        <p> About</p>
        <p>Blog</p>
        <p>Contact us</p>
        <div className="right-header-elements">
          <div className="search-bar"><IoSearchOutline />Search</div>
          <div className="header-cart-icon"><IoBag /></div>
        </div>
      </div>
    </>
  );
};
export default page;
