import React from "react";
import "./page.css";
type Books = {
    image: string;
    title: string;
    price: string;
  };
  const Book:Books[]=[
    {
        image:"/home_images/babylon.jpg",
        title:"The Richest Man in Babylon",
        price:"$10.49 USD"
    },
    {
        image:"/einstein.jpg",
        title:"Enstein:His Life",
        price:"$9.00 USD"
    },
    {
        image:"/home_images/ikigai.jpg",
        title:"Ikigai",
        price:"$11.50 USD"
    },
    {
        image:"/shop_images/deadbody.jpg",
        title:"Over My Dead Body",
        price:"$14.52 USD"
    },

  ]
const page = ()=>{
    return(
        <>
       <div className="book r_container">
        <img src="/home_images/think-grow.jpg" alt="" width={580} height={750}/>
        <div className="book-info">
            <h1>Think And grow </h1>
            <p>-Nepolean Hill</p>
            <p>Think and Grow Rich is a book written by Napoleon Hill released in 1937 and promoted as a personal development and self-improvement book.</p>
            <h4>$12.78 USD<span>$18.00 USD</span></h4>
            <div className="cart-info">
                <div className="number">1</div>
                <div className="add">Add to cart</div>
            </div>
            <p>Author:Nepoleon Hill </p>
            <p>Category:Self Help </p>
            <p>Length:238 </p>
            <p>Published:13 December 2016 </p>
            <p>ISBN:978-1-78844-102-5 </p>
        </div>
       </div>
       <div className="description r_container">
        <h2>Description</h2>
        <div className="desc-info">
            <p>He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie. However there is no evidence that the two ever met.</p>
            <br /> <br />
            <p>The most famous of all teachers of success spent "a fortune and the better part of a lifetime of effort" to produce the "Law of Success" philosophy that forms the basis of his books and that is so powerfully summarized in this one.</p>
            <br /> <br />
            <p>In the original Think and Grow Rich, published in 1937, Hill draws on stories of Andrew Carnegie, Thomas Edison, Henry Ford, and other millionaires of his generation to illustrate his principles. In the updated version, Arthur R. Pell, Ph.D., a nationally known author, lecturer, and consultant in human resources management and an expert in applying Hill's thought, deftly interweaves anecdotes of how contemporary millionaires and billionaires, such as Bill Gates, Mary Kay Ash, Dave Thomas, and Sir John Templeton, achieved their wealth.</p>

        </div>
       </div>
       <div className="similar-books r_container">
        <h1>Similar Books</h1>
        <div className="book-store">
        {Book.map((Books,index)=>(
            <div key={index} className="book-card">
              <img src={`${Books.image}`} alt="" width={300} height={400}/>
              <h5>{Books.title}</h5>
              <p>{Books.price}</p>
            </div>
          ))}
          
       </div>
    </div>

        </>
    )
}
export default page;