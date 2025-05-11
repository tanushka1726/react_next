import React from "react";
import FooterBase from "@/components/FooterBase/FooterBase"

import "./page.css";
// import "./globals.css"
import { IoMdArrowForward } from "react-icons/io";
type explores = {
  image:string;
  title:string;
  color:string;
}
const explore :explores[]=[
  {
    image:"/home_images/category2.jpg",
    title:"Biography",
    color:"#bbb2cf"
  },
  {
    image:"/home_images/category1.jpg",
    title:"Novel",
    color:"#ca9da2"
  },
  {
    image:"/home_images/category3.jpg",
    title:"Self Help",
    color:"#e4b976"
  }
]
type popBooks = {
  image:string;
  title:string;
  price:string;
}
const popBook :popBooks[]=[
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
]

type newBooks = {
  image: string;
  title: string;
  price: string;
};
const newBook : newBooks[]=[
  {
    image:"/home_images/alchemist.jpg",
    title:"The Alchemist",
    price:"$11.00 USD"
  },
  {
    image:"/home_images/deadbody.jpg",
    title:"Over My Dead Body",
    price:"$14.52 USD"
  },
  {
    image:"/home_images/ikigai.jpg",
    title:"Ikigai",
    price:"$11.50 USD"
  },
  {
    image:"/home_images/think-grow.jpg",
    title:"Think and Grow Rich",
    price:"$12.78 USD"
  },
  {
    image:"/home_images/12rules.jpg",
    title:"12 Rules for Life",
    price:"$9.74 USD"
  },
  {
    image:"/home_images/babylon.jpg",
    title:"The Richest Man in Babylon",
    price:"$10.49 USD"
  },
  {
    image:"/home_images/almanack.jpg",
    title:"The Alamanck of Naval Ravikant",
    price:"$10.36 USD"
  },
  {
    image:"/home_images/psychology.jpg",
    title:"The Psychology of Money",
    price:"$6.40 USD"
  },
]
type cards= {
  title:string;
  description:string;
  color:string;
  img_url:string;
}
const card:cards[]=[
  {
    title:"Free Shipping for Book Lovers",
    description:"Explore & Shop Books Now",
    color:"#bbb2cf",
    img_url:"/jenny.jpg"

  },
  {
    title:"Return with Confidence",
    description:"Within 20 Days Return",
    color:"#ca9da2",
    img_url:"/jenny.jpg"
  },
  {
    title:"Efficient Book Delivery",
    description:"Fast & Efficient Service",
    color:"#e4b976",
    img_url:"/jenny.jpg"
  }
]


const page = () => {
  return (
    <>
      <div className="first-section">
        <div className="first-section-left">
          <div className="first-section-explore">
            <h1>
              Find your next great <br /> read at our online <br /> book store
            </h1>
            <a href="/shop" className="btn">
              Explore Books
              <IoMdArrowForward />
            </a>
          </div>
        </div>
        <div className="first-section-right">
          <div className="psychology">
            <img
              src={"/home_images/psychology.jpg"}
              alt="psychology.jpg"
              width={300}
              height={400}
            />
          </div>
          <div className="alchemist">
            <img
              src={"/home_images/alchemist.jpg"}
              alt="alchemist.jpg"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>

      <div className="second-section">
        <div className="community-left">
          <img
            src="/home_images/community1.jpg"
            alt="community"
            width={330}
            height={350}
          />
          <h1>
            Introducing Our Bookstore and <br /> Community
          </h1>
          <p>
            Discover our bookstore and community, where stories unfold and
            connections flourish.
          </p>
        </div>
        <div className="community-right">
          <img
            src="/home_images/community2.jpg"
            alt="community"
            width={600}
            height={700}
          />
          <p>
            Welcome to Book Store: Empowering Minds Through Reading! We believe
            in the transformative power of books and their ability to shape and
            inspire individuals. Our mission is to create a vibrant and
            inclusive community that celebrates the joy of reading and
            encourages personal growth.
          </p>
          <a href="/about" className="next-btn">
            About us
            <IoMdArrowForward />
          </a>
        </div>
      </div>
      <div className="explore-category r_container">
        <h1>Explore Categories</h1>
        <div className="explore">
          {explore.map((explores,index)=>(
            <div key={index} className="explore-card" style={{backgroundColor:explores.color}}>
              <img src={`${explores.image}`} alt="" width={200} height={200}/>
              <div className="side-bar">
                <h3>{explores.title}</h3>
                <div className="shop-now">Shop now</div>
              </div>

            </div>
          ))}
          
        </div>
      </div>
      <div className="trending-books r_container">
        <div className="trending">Trending</div>
        <h1>Popular Books</h1>
        <div className="book-store">
        {popBook.map((popBooks,index)=>(
            <div key={index} className="book-card">
              <img src={`${popBooks.image}`} alt="" width={300} height={400}/>
              <h5>{popBooks.title}</h5>
              <p>{popBooks.price}</p>
            </div>
          ))}
          
       </div>
       <div className="next-button">
             <a href="/shop" className="next-btn">View All<IoMdArrowForward /></a>
        </div>
      </div>
      <div className="facility r_container">
        <div className="facility-card">
          <h2>Free Shipping for Book Lovers</h2>
          <p>Explore & Shop Books Now </p>

        </div>
      </div>

      <div className="r_container trending-books">
        <div className="latest-coll trending">Latest Collection</div>
        <h1>New Arrival Books</h1>
        <div className="book-store">
          {newBook.map((newBooks,index)=>(
            <div key={index} className="book-card">
              <img src={`${newBooks.image}`} alt="" width={300} height={400}/>
              <h5>{newBooks.title}</h5>
              <p>{newBooks.price}</p>
            </div>
          ))}
        </div>

      </div>
      <div className="next-button">
             <a href="/shop" className="next-btn">View All Books<IoMdArrowForward /></a>
      </div>

    <div className="featured-book r_container">
      <h1>Featured Book of the Week</h1>
      <div className="featured-info">
        <img src="/home_images/almanack.jpg" alt="" width={370} height={530} />
        <div className="book-details">
          <h4>The Almanack Of Naval Ravikant</h4>
          <p>Getting rich is not just about luck;happiness is just a  <br />trait we bornwith these.Aspirations may seem out of reach,but bulding wealth and being happy are skills we learn  </p>
          <p>So,what are these skills,and how do we learn them?What are the principles that should guide our efforts?</p>
          <br /> <br /> <br /> <br />
          <h5>Eric Jorgenson</h5>
          <p>$10.36 USD</p>
          <br /> <br />
          <a href="/shop" className="next-btn">Shop now</a>
          
        </div>
        <div className="more-books">
          <div className="books">
            <img src="/home_images/psychology.jpg" alt=""  width={140} height={200}/>
            <div className="book-desc">
            <h4>The Psychology Of <br />Money</h4 >
            <p>$6.40 USD</p>
            </div>

          </div>
          <hr />
          <br />
          <div className="books">
            
            <img src="/home_images/12rules.jpg" alt=""  width={140} height={200}/>
            <div className="book-desc">
            <h4>12 Rules for Liife</h4 >
            <p>$9.74 USD</p>
            </div>

          </div>
        </div>
      </div>
      </div>  

      <div className="blog r_container">
        <div className="trending">Blogs</div>
        <h1>Latest News And Resources</h1>
        <div className="blog-section">
          <div className="blog-right-section">
           <img src="/blog_right.jpg" alt="" width={630} height={430} />
           <p>July 25,2023</p>
           <h4>A Journey into the Inchanting Depths Of Books</h4>
           <p>Our collection of boooks is valuable resource for nuturing your artistic growth and expanding your creative horizons</p>
          </div>
         <div className="blog-left-section">
           <div className="side-section">
             <img src="/blog1_left.jpg" alt="" height={300} width={330}/>
             <div className="blog-side-info">
             <p>July 25,2023</p>
             <h4>Embracing your Inner Strength And Achieving</h4>
             <p>Embracing your inner strength empower you to face challenges</p>
             </div>
           </div>
           <div className="side-section">
             <img src="/blog2_left.jpg" alt="" height={300} width={330}/>
             <div className="blog-side-info">
              <p>July 23,2023</p>
              <h4>Books to Inspire, Motivate, And Unleash</h4>
              <p>Our collection of books is a valuable resource for nuturing your artistic</p>
             </div>
           </div>
         </div>
        </div>
      </div>
      <div className="next-button">
             <a href="/blog" className="next-btn">View All<IoMdArrowForward /></a>
        </div>
        <FooterBase/>
    </>
  );
};
export default page;
