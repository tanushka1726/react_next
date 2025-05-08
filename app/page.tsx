import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer"
import "./page.css"
// import "./globals.css"
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
type books = {
  image: string;
  title: string;
  price: string;
};
const book : books[]=[
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
      <Header />
      <div className="first-section">
        <div className="first-section-left">
          <div className="first-section-explore">

          <h1>Find your next great <br /> read at our online <br /> book store</h1>
          <a href="/shop" className="btn">Explore Books<IoMdArrowForward /></a>

          </div>
          
        </div>
        <div className="first-section-right">
          <div className="psychology">
          <img src={"/home_images/psychology.jpg"} alt="psychology.jpg" width={300} height={400}  />
          </div>
          <div className="alchemist">
          <img src={"/home_images/alchemist.jpg"} alt="alchemist.jpg" width={300} height={400}  />
          </div>
        </div>
      </div>

      <div className="second-section">
        <div className="community-left">
          <img src="/home_images/community1.jpg" alt="community" width={330} height={350} />
          <h1>Introducing Our Bookstore and <br /> Community</h1>
          <p>Discover our bookstore and community, where stories unfold and connections flourish.</p>

        </div>
        <div className="community-right">
        <img src="/home_images/community2.jpg" alt="community" width={600} height={700} />
        <p>Welcome to Book Store: Empowering Minds Through Reading! We believe in the transformative power of books and their ability to shape and inspire individuals. Our mission is to create a vibrant and inclusive community that celebrates the joy of reading and encourages personal growth.</p>
        <a  href="/about" className="next-btn">About us<IoMdArrowForward /></a>

        </div>
      </div>
      <div className="explore-category r_container">
        <h1>Explore Categories</h1>
        <div className="explore">
          <div className="explore-card">
            <img src="/home_images/category2.jpg" alt="" width={200} height={200}/>
            <div className="side-bar biography">
              <h3>Biography</h3>
              <div className="shop-now">Shop now</div>
            </div>
          </div>
          <div className="explore-card">
            <img src="/home_images/category1.jpg" alt="" width={200} height={200}/>
            <div className="side-bar novel">
            <h3>Novels</h3>
            <div className="shop-now">Shop now</div>
            </div>
          </div>
          <div className="explore-card">
            <img src="/home_images/category3.jpg" alt="" width={200} height={200}/>
            <div className="side-bar self-help">
            <h3>Self Help</h3>
            <div className="shop-now">Shop now</div>
            </div>
          </div>

        </div>
      </div>
      <div className="trending-books r_container" >
        <div className="trending">
          Trending
        </div>
        <h1>Popular Books</h1>
        <div className="book-store">
          <div className="book-card">
         <img src="/home_images/psychology.jpg" alt="psychology" width={300} height={400}/>
         <h4>The Psychology of Money</h4>
         <p>$6.40 USD</p>
       </div>
        <div className="book-card">
        <img src="/home_images/educated.jpg" alt="educated" width={300} height={400}/>
        <h4>Educated</h4>
        <p>$12.96 USD</p>
       </div>
       <div className="book-card">
        <img src="/home_images/crawards_sing.jpg" alt="crawards-sing" width={300} height={400}/>
        <h4>Where The Crawards Sing</h4>
        <p>$11.12 USD</p>
       </div>
       <div className="book-card">
        <img src="/home_images/mockingbird.jpg" alt="mockingbird" width={300} height={400}/>
        <h4>To Kill A Mockingbird</h4>
        <p>$4.78 USD</p>
       </div>
       </div>
       <div className="next-button">
             <a href="/shop" className="next-btn">View All<IoMdArrowForward /></a>
        </div>

      </div>
      <div className="facility r_container" style={{display:"flex", gap:"20px"}}/>
      
         {card.map((cards,index)=>(
          <div key={index} style={{backgroundColor:cards.color,alignItems:"center",gap:"20px" ,padding:"0 1.5rem",display:"inline-block"}}>
            <div>
              <h4>{cards.title}</h4>
              <p>{cards.description}</p>
            </div>
            <div>
              <img  width={200} height={200}src={`${cards.img_url}`} alt="" style={{borderRadius:"50%"}}/>
            </div>
          </div>
         ))}
      

      <div className="r-container trending-books">
        <div className="latest-coll trending">
          Latest Collection
        </div>
        <h1>New Arrival Books</h1>
        {book.map((books,index)=>(
          <div className="book-store">
            <div className="book-card">
         <img src={`${books.image}`} alt={`${books.image}`} width={300} height={400}/>
         <h4>{books.title}</h4>
         <p>{books.price}</p>
         </div>


          </div>
          

        ))}
        {/* <div className="book-store">
        <div className="book-card">
         <img src="/home_images/alchemist.jpg" alt="alchemist" width={300} height={400}/>
         <h4>The Alchemist</h4>
         <p>$11.00 USD</p>
         </div>
         <div className="book-card">
         <img src="/home_images/deadbody.jpg" alt="deadbody" width={300} height={400}/>
         <h4>Over My Dead Body</h4>
         <p>$14.52 USD</p>
         </div>
         <div className="book-card">
         <img src="/home_images/ikigai.jpg" alt="ikigai" width={300} height={400}/>
         <h4>Ikigai</h4>
         <p>$11.50 USD</p>
         </div>
         <div className="book-card">
         <img src="/home_images/think-grow.jpg" alt="think-grow" width={300} height={400}/>
         <h4>Think and Grow Rich</h4>
         <p>$12.58 USD</p>
         </div>
         <div className="book-card">
         <img src="/home_images/12rules.jpg" alt="12rules" width={300} height={400}/>
         <h4>12 Rules of Life</h4>
         <p>$9.74 USD</p>
         </div>
         <div className="book-card">
         <img src="/home_images/babylon.jpg" alt="babylon" width={300} height={400}/>
         <h4>The Richest Man in Babylon</h4>
         <p>$10.36 USD</p>
         </div>
         <div className="book-card">
         <img src="/home_images/almanack.jpg" alt="almanack" width={300} height={400}/>
         <h4>The Almanack</h4>
         <p>$10.36 USD</p>
         </div>
         <div className="book-card">
         <img src="/home_images/psychology.jpg" alt="psychology" width={300} height={400}/>
         <h4>The Psychology of Money</h4>
         <p>$6.40 USD</p>
         </div>

       </div> */}

      </div>
      <div className="next-button">
             <a href="/shop" className="next-btn">View All Books<IoMdArrowForward /></a>
      </div>

    <div className="featured-book r_container">
      <h1>Featured Book of the Week</h1>
      <div className="featured-info">
        <img src="/home_images/almanack.jpg" alt="" width={390} height={530} />
        <div className="book-details">
          <h4>The Almanack Of Naval Ravikant</h4>
          <p>Getting rich is not just about luck;happiness is just a  <br />trait we bornwith these.Aspirations may seem out of reach,but bulding wealth and being happy are skills we learn  </p>
          <p>So,what are these skills,and how do we learn them?What are the principles that should guide our efforts?</p>
          <br /> <br /> <br />
          <h4>Eric Jorgenson</h4>
          <p>$10.36 USD</p>
          <a href="/shop" className="next-btn">Shop now</a>
        </div>
        <div className="more-books">
          <div className="books-info">
            <img src="/home_images/psychology.jpg" alt=""  width={160} height={230}/>
            <div className="book-desc">
            <h4>The Psychology Of <br />Money</h4 >
            <p>$6.40 USD</p>
            </div>
          </div>
          <hr />
          <div className="books-info">
            <img src="/home_images/12rules.jpg" alt=""  width={160} height={230}/>
            <div className="book-desc">
            <h4>12 Rules For Life</h4>
            <p>$6.40 USD</p>
            </div>
          </div>  

          
        </div>
      </div>
      </div>  



      <Footer/>
    </>
  )
};
export default page;
