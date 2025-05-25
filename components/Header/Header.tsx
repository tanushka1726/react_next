"use client";
import React, { useState } from "react";
import "./Header.css";
import { IoSearchOutline, IoBag } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type NavItem = {
  label: string;
  href?: string;
  subItems?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: 'Book',
    subItems: [
      { label: 'Biography', href: '/category/biography' },
      { label: 'Novel', href: '/category/novel' },
      { label: 'Self Help', href: '/category/self-help' },
    ],
  },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact us', href: '/contact' },
];

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
    const handleLinkClick = () => setMenuOpen(false);
  return (
    <>
    <header className="headerContainer">
      <ul className="navList r_container">
        <Link href="/">
          <img src="/header_images/logo.svg" alt="" />
        </Link>
        {/* <Link href="/books">Books</Link> */}
        <div className="dropdown desktop_link" onClick={toggleDropdown}>
          <button
            className="dropdown-toggle btn_books"
            data-bs-toggle="dropdown "
            aria-expanded={isOpen}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            Books{" "}
            {isOpen ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
          </button>
          <ul
            className={`dropdown-menu dd_menu ${isOpen ? "show" : ""}`}
            style={{ padding: "10px 0", borderRadius: "0", width: "200px" }}
          >
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

        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact us</Link>
        <div className="right-header-elements">
          <div className="search-bar desktop_link">
            <IoSearchOutline size={25} />
            <input type="text" placeholder="Search book.." />
          </div>
          <div className="header-cart-icon">
            <IoBag />
          </div>
          <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <CgMenuRightAlt size={25} />
        </div>
        </div>
       
      </ul>
      
       <ul className={`overlay ${menuOpen ? 'open' : ''}`}>
      <div className="mobileMenu">
        <div className="search-bar mob_search">
          <IoSearchOutline size={25} />
          <input type="text" placeholder="Search book.." />
        </div>

        {navItems.map((item) => (
          <li key={item.label}>
            {item.subItems ? (
              <>
                <div className="book_mobile">{item.label}</div>
                <ul>
                  {item.subItems.map((sub) => (
                    <li key={sub.label}>
                      <Link href={sub.href!} onClick={handleLinkClick}>
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={item.href!} onClick={handleLinkClick}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </div>
    </ul>
    </header>
    <div className="header_height"></div>
    </>
  );
};
export default Page;
