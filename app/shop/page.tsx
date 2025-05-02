import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./page.css"
import { IoMdArrowForward } from "react-icons/io";
const page = () => {
  return (
    <>
    <Header/>
    <div className="book-collection">
      <h1>Our Book Collection</h1>
      <h5>Explore different collection and discover new perspectives, knowledge,<br /> and inspiration.</h5>
    </div>
    <div className="book-store">
      <div className="book-card">
        <img src="psychology.jpg" alt="psychology" width={300} height={400}/>
        <h2>The Psychology of Money</h2>
        <h3>$6.40 USD</h3>
      </div>
      <div className="book-card">
        <img src="educated.jpg" alt="educated" width={300} height={400}/>
        <h2>Educated</h2>
        <h3>$12.96 USD</h3>
      </div>
      <div className="book-card">
        <img src="crawards_sing.jpg" alt="crawards-sing" width={300} height={400}/>
        <h2>Where The Crawards Sing</h2>
        <h3>$11.12 USD</h3>
      </div>
      <div className="book-card">
        <img src="mockingbird.jpg" alt="mockingbird" width={300} height={400}/>
        <h2>To Kill A Mockingbird</h2>
        <h3>$4.78 USD</h3>
      </div>
      <div className="book-card">
        <img src="stealLike.jpg" alt="stealLike" width={300} height={400}/>
        <h2>Steal Like An Artist</h2>
        <h3>$16.93 USD</h3>
      </div>
      <div className="book-card">
        <img src="deadbody.jpg" alt="deadbody" width={300} height={400}/>
        <h2>Over My Dead Body</h2>
        <h3>$12.96 USD</h3>
      </div>
      <div className="book-card">
        <img src="1984.jpg" alt="1984" width={300} height={400}/>
        <h2>1984</h2>
        <h3>$11.11 USD</h3>
      </div>
      <div className="book-card">
        <img src="tuesdays.jpg" alt="tuesdays" width={300} height={400}/>
        <h2>Tuesdays With Morrie</h2>
        <h3>$12.96 USD</h3>
      </div>
      <div className="book-card">
        <img src="daVinciCode.jpg" alt="daVinciCode" width={300} height={400}/>
        <h2>The Da Vinci Code</h2>
        <h3>$14.50 USD</h3>
      </div>
      <div className="book-card">
        <img src="alchemist.jpg" alt="alchemist" width={300} height={400}/>
        <h2>The Alchemist</h2>
        <h3>$11.00 USD</h3>
      </div>
      <div className="book-card">
        <img src="titan.jpg" alt="titan" width={300} height={400}/>
        <h2>Titan:The life of Jhon D. <br /> <br /> <br /> Rockfeller,Sr.</h2>
        <h3>$6.00USD</h3>
      </div>
      <div className="book-card">
        <img src="barack_obama.jpg" alt="barack_obama" width={300} height={400}/>
        <h2>A Promised Land</h2>
        <h3>$8.71 USD</h3>
      </div>
    </div>
    <div className="next-button">
      <button className="next-btn">Next<IoMdArrowForward /></button>
    </div>
    {/* <Footer/> */}
    </>
  )
};
export default page;
