import React from "react";
import "./page.css"
import { IoMdArrowForward } from "react-icons/io";
type books = {
  image: string;
  title: string;
  price: string;
};
const book : books[]=[
  {
    image:"/shop_images/psychology.jpg",
    title:"The Psychology of Money",
    price:"$6.40 USD"
  },
  {
    image:"/shop_images/educated.jpg",
    title:"Educated",
    price:"$12.96 USD"
  },
  {
    image:"/shop_images/crawards_sing.jpg",
    title:"Where The Crawards Sing",
    price:"$11.12 USD",
  },
  {
    image:"/shop_images/mockingbird.jpg",
    title:"To Kill A Mockingbird",
    price:"$4.78 USD"
  },
  {
    image:"/shop_images/stealLike.jpg",
    title:"Steal Like An Artist",
    price:"$16.93 USD"
  },
  {
    image:"/shop_images/deadbody.jpg",
    title:"Over My Dead Body",
    price:"$14.52 USD"
  },
  {
    image:"/shop_images/1984.jpg",
    title:"1984",
    price:"$11.11 USD"
  },
  {
    image:"/shop_images/tuesdays.jpg",
    title:"Tuesdays With Morrie",
    price:"$12.96 USD",
  },
  {
    image:"/shop_images/daVinciCode.jpg",
    title:"The Da Vinci Code",
    price:"$14.50 USD"
  },
  {
    image:"/shop_images/alchemist.jpg",
    title:"The Alchemist",
    price:"$11.00 USD"
  },
  {
    image:"/shop_images/titan.jpg",
    title:"Titan:The life of Jhon D.",
    price:"$6.00USD",
  },
  {
    image:"/shop_images/barack_obama.jpg",
    title:"A Promised Land",
    price:"$8.71 USD"
  }
  
]

const page = () => {
  return (
    <>
    
    <div className="book-collection ">
      <h1>Our Book Collection</h1>
      <h5>Explore different collection and discover new perspectives, knowledge,<br /> and inspiration.</h5>
    </div>
    <div className="book-store r_container">
    {book.map((books,index)=>(
            <div  className="book-card">
              <img src={`${books.image}`} alt="" width={300} height={400}/>
              <h5>{books.title}</h5>
              <p>{books.price}</p>
            </div>
          ))}
      
    </div>
    <div className="next-button">
      <a href=""className="next-btn">Next<IoMdArrowForward/></a>
    </div>
    </>
  )
};
export default page;
