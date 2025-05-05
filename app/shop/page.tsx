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
        <img src="/shop_images/psychology.jpg" alt="psychology" width={300} height={400}/>
        <h4>The Psychology of Money</h4>
        <p>$6.40 USD</p>
      </div>
      <div className="book-card">
        <img src="/shop_images/educated.jpg" alt="educated" width={300} height={400}/>
        <h4>Educated</h4>
        <p>$12.96 USD</p>
      </div>
      <div className="book-card">
        <img src="/shop_images/crawards_sing.jpg" alt="crawards-sing" width={300} height={400}/>
        <h4>Where The Crawards Sing</h4>
        <p>$11.12 USD</p>
      </div>
      <div className="book-card">
        <img src="/shop_images/mockingbird.jpg" alt="mockingbird" width={300} height={400}/>
        <h4>To Kill A Mockingbird</h4>
        <p>$4.78 USD</p>
      </div>
      <div className="book-card">
        <img src="/shop_images/stealLike.jpg" alt="stealLike" width={300} height={400}/>
        <h4>Steal Like An Artist</h4>
        <p>$16.93 USD</p>
      </div>
      <div className="book-card">
        <img src="/shop_images/deadbody.jpg" alt="deadbody" width={300} height={400}/>
        <h4>Over My Dead Body</h4>
        <p>$12.96 USD</p>
      </div>
      <div className="book-card">
        <img src="/shop_images/1984.jpg" alt="1984" width={300} height={400}/>
        <h4>1984</h4>
        <p>$11.11 USD</p>
      </div>
      <div className="book-card">
        <img src="/shop_images/tuesdays.jpg" alt="tuesdays" width={300} height={400}/>
        <h4>Tuesdays With Morrie</h4>
        <p>$12.96 USD</p>
      </div>
      <div className="book-card">
        <img src="/shop_images/daVinciCode.jpg" alt="daVinciCode" width={300} height={400}/>
        <h4>The Da Vinci Code</h4>
        <p>$14.50 USD</p>
      </div>
      <div className="book-card">
        <img src="/shop_images/alchemist.jpg" alt="alchemist" width={300} height={400}/>
        <h4>The Alchemist</h4>
        <p>$11.00 USD</p>
      </div>
      <div className="book-card">
        <img src="/shop_images/titan.jpg" alt="titan" width={300} height={400}/>
        <h4>Titan:The life of Jhon D. <br /> Rockfeller,Sr.</h4>
        <p>$6.00USD</p>
      </div>
      <div className="book-card">
        <img src="/shop_images/barack_obama.jpg" alt="barack_obama" width={300} height={400}/>
        <h4>A Promised Land</h4>
        <p>$8.71 USD</p>
      </div>
      
    </div>
    <div className="next-button">
      <a href="/shop_page2"className="next-btn">Next<IoMdArrowForward/></a>
    </div>
    
    {/* <Footer/> */}
    </>
  )
};
export default page;
