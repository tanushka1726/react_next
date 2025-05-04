import React from "react";
import Header from "@/components/Header/Header";
import "./page.css"
import { IoMdArrowForward } from "react-icons/io";
const page = () => {
  return (
    <>
    <Header/>
    <div className="blog-collection">
      <h1>Our Blogs</h1>
      <h5>In a world that can sometimes feel overwhelming and challenging, <br /> positive thinking offers a ray of hope and a path to a brighter future.</h5>
    </div>
    <div className="book-blogs">
        <div className="blog-card">
            <img src="blog1.jpg" alt="blog1" width={530} height={400}/>
            <div className="blog-info">
                <h4>July 23,2023</h4>
                <h1>A Journey into the Enchanting Depths of <br /> books</h1>
                <h4>Our coolection of books is a valuable resource for nuturing your artistic growth and expanding your <br />creative horizons</h4>
                <a href="">Read More<IoMdArrowForward /></a>
            </div>
        </div>
        <hr />
        <div className="blog-card">
            <img src="blog2.jpg" alt="blog2" width={530} height={400}/>
            <div className="blog-info">
                <h4>July 20,2023</h4>
                <h1>Discovering Strengths and Embracing <br /> Change</h1>
                <h4>These captivating stories chronicle the lives of individuals who have faced adversity head-on,overcome<br />challenges,and emerged stronger than ever</h4>
                <a href="">Read More<IoMdArrowForward /></a>
            </div>
        </div>
        <hr />
        <div className="blog-card">
            <img src="blog3.jpg" alt="blog3" width={530} height={400}/>
            <div className="blog-info">
                <h4>July 20,2023</h4>
                <h1>Books of Personal Growth and Self-<br /> Discovery</h1>
                <h4>Books of personal growth and self discovery are powerful tools that can help individuals unlock their  <br />potential,gain self-awareness,and create positive changes  in their lives</h4>
                <a href="">Read More<IoMdArrowForward /></a>
            </div>
        </div>
        <hr />
        <div className="blog-card">
            <img src="blog4.jpg" alt="blog4" width={530} height={400}/>
            <div className="blog-info">
                <h4>July 20,2023</h4>
                <h1>Shop Your Favourite Reads Anytime,Anywhere <br /> books</h1>
                <h4>Shop your favourite reads anytime,anywhere with our convenient online bookstore.With just a few<br />clicks,you can explore new words,gain knowledge,and induldge in captivating stories</h4>
                <a href="">Read More<IoMdArrowForward /></a>
            </div>
        </div>
        <hr />
        <div className="blog-card">
            <img src="blog5.jpg" alt="blog5" width={530} height={400}/>
            <div className="blog-info">
                <h4>July 20,2023</h4>
                <h1>Unleasing the Power of Positive<br /> Thinking</h1>
                <h4>Positive is not about denying reality or ignoring negative situations.Instead,it's about focusing <br />on the possiblities,finding the silver lining,and maintaining a hopeful attitude</h4>
                <a href="">Read More<IoMdArrowForward /></a>
            </div>
        </div>
        <hr />
        <div className="blog-card">
            <img src="blog6.jpg" alt="blog6" width={530} height={400}/>
            <div className="blog-info">
                <h4>July 20,2023</h4>
                <h1>Books to Inspire,Motivate,and Unleash <br /> Your Inner Artist</h1>
                <h4>Our coolection of books is a valuable resource for nuturing your artistic growth and expanding your <br />creative horizons</h4>
                <a href="">Read More<IoMdArrowForward /></a>
            </div>
        </div>
          <hr />
          <br /> <br />
          <div className="next-button" >
              <button className="next-btn">Next<IoMdArrowForward /></button>
        </div>
    </div>
        
    </>
  )
};
export default page;