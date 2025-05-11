"use client";
import React, { useState } from "react";
import "./Header.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div style={{ borderBottom: "1px solid black" }}>
      <div className="left-header-elements r_container">
        <a href="/">
          <img src="/header_images/logo.svg" alt="" />
        </a>
        {/* <a href="/books">Books</a> */}
        <div className="dropdown" onClick={toggleDropdown}>
          <button
            className="dropdown-toggle btn_books"
            data-bs-toggle="dropdown "
            aria-expanded={isOpen}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            Books {isOpen ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/>}
          </button>
          <ul className={`dropdown-menu dd_menu ${isOpen ? "show" : ""}`} style={{padding: "10px 0", borderRadius: "0", width:"200px" }}>
            <li>
              <Link className="dropdown-item" href="/category/self-help">
                Self Help
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/category/biography">
                Biography
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/category/novel">
                Novel
              </Link>
            </li>
          </ul>
        </div>

        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/contactus">Contact us</a>
        <div className="right-header-elements">
          <div className="search-bar">
            <IoSearchOutline size={25} />
            <input type="text" placeholder="Search book.." />
          </div>
          <div className="header-cart-icon">
            <IoBag />
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
