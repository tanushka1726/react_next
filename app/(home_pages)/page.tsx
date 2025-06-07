import React from "react";
import FooterBase from "@/components/FooterBase/FooterBase";

import "./page.css";
// import "./globals.css"
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
// import { LuRadius } from "react-icons/lu";
type explores = {
  image: string;
  title: string;
  color: string;
};
const explore: explores[] = [
  {
    image: "/home_images/category2.jpg",
    title: "Biography",
    color: "#bbb2cf",
  },
  {
    image: "/home_images/category1.jpg",
    title: "Novel",
    color: "#ca9da2",
  },
  {
    image: "/home_images/category3.jpg",
    title: "Self Help",
    color: "#e4b976",
  },
];
type popBooks = {
  image: string;
  title: string;
  price: string;
};
const popBook: popBooks[] = [
  {
    image: "/shop_images/psychology.jpg",
    title: "The Psychology of Money",
    price: "$6.40 USD",
  },
  {
    image: "/shop_images/educated.jpg",
    title: "Educated",
    price: "$12.96 USD",
  },
  {
    image: "/shop_images/crawards_sing.jpg",
    title: "Where The Crawards Sing",
    price: "$11.12 USD",
  },
  {
    image: "/shop_images/mockingbird.jpg",
    title: "To Kill A Mockingbird",
    price: "$4.78 USD",
  },
];

type newBooks = {
  image: string;
  title: string;
  price: string;
};
const newBook: newBooks[] = [
  {
    image: "/home_images/alchemist.jpg",
    title: "The Alchemist",
    price: "$11.00 USD",
  },
  {
    image: "/home_images/deadbody.jpg",
    title: "Over My Dead Body",
    price: "$14.52 USD",
  },
  {
    image: "/home_images/ikigai.jpg",
    title: "Ikigai",
    price: "$11.50 USD",
  },
  {
    image: "/home_images/think-grow.jpg",
    title: "Think and Grow Rich",
    price: "$12.78 USD",
  },
  {
    image: "/home_images/12rules.jpg",
    title: "12 Rules for Life",
    price: "$9.74 USD",
  },
  {
    image: "/home_images/babylon.jpg",
    title: "The Richest Man in Babylon",
    price: "$10.49 USD",
  },
  {
    image: "/home_images/almanack.jpg",
    title: "The Alamanck of Naval Ravikant",
    price: "$10.36 USD",
  },
  {
    image: "/home_images/psychology.jpg",
    title: "The Psychology of Money",
    price: "$6.40 USD",
  },
];
type cards = {
  title: string;
  description: string;
  color: string;
  img_url: string;
};
const card: cards[] = [
  {
    title: "Free Shipping for Book Lovers",
    description: "Explore & Shop Books Now",
    color: "#bbb2cf",
    img_url: "/svg1.svg",
  },
  {
    title: "Return with Confidence",
    description: "Within 20 Days Return",
    color: "#ca9da2",
    img_url: "/svg2.svg",
  },
  {
    title: "Efficient Book Delivery",
    description: "Fast & Efficient Service",
    color: "#e4b976",
    img_url: "/svg3.svg",
  },
];

const page = () => {
  return (
    <>
      <div className="main-section">
        <div className="r_container ">
          <div className="first-section">
            <div className="first-section-left ">
              <div className="first-section-explore">
                <h1>
                  Find your next great read at our online book
                  store
                </h1>
                <Link href="/shop" className="btn">
                  Explore Books
                  <IoMdArrowForward />
                </Link>
              </div>
            </div>
            <div className="first-section-right">
              <div className="psychology">
                <img
                  src={"/home_images/psychology.jpg"}
                  alt="psychology.jpg"

                />
              </div>
              <div className="alchemist">
                <img
                  src={"/home_images/alchemist.jpg"}
                  alt="alchemist.jpg"

                />
              </div>
            </div>
            <div className="triangle-small-home"></div>
          </div>
        </div>
      </div>
      <div className="home_below">
        <div className="r_container">
          <div className="hero-bottom">
            <div className="hero-category">
              <div className="category-btn">
                <div className="star-icon">
                  <img
                    src="/home_images/star.svg"
                    loading="lazy"
                    alt="Star"
                  />
                </div>
                <Link
                  href="category/biography"
                  className="category-tag w-inline-block"
                >
                  <div>Biography</div>
                </Link>
              </div>
              <div className="category-btn">
                <Link
                  href="category/novel"
                  className="category-tag w-inline-block"
                >
                  <div>Novel</div>
                </Link>
                <div className="star-icon">
                  <img
                    src="/home_images/star.svg"
                    loading="lazy"
                    alt="Star"
                  />
                </div>
                <Link
                  href="category/self-help"
                  className="category-tag w-inline-block"
                >
                  <div>Self Help</div>
                </Link>
              </div>
            </div>
            <div className="hero-review">
              <div className="review-top">
                <div className="button-wrap style-btn">
                  <Link
                    href="/customer-review"
                    className="primary-btn review w-inline-block"
                  >
                    <div>Reviews</div>
                  </Link>
                  <div className="review-img-wrap">
                    <div className="hero-review-img">
                      <img
                        src="/home_images/review_icon_img1.jpg"
                        loading="lazy"
                        alt="Review Image"
                      />
                    </div>
                    <div className="hero-review-img">
                      <img
                        src="/home_images/review_icon_img2.jpg"
                        loading="lazy"
                        alt="Review Image"
                      />
                    </div>
                    <div className="hero-review-img">
                      <img
                        src="/home_images/review_icon_img3.jpg"
                        loading="lazy"
                        alt="Review Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="hr-text">
                Find captivating stories, knowledge, and adventures. From
                classics to bestsellers, there&apos;s something for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="r_container">
        <div className="about-wrap">
          <div className="about-head">
            <div className="about-img-small"><img
              src="../cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b65c072152ab63f7801aad_about-small.jpg"
              loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 719px) 94vw, (max-width: 767px) 676px, 24vw"
              srcSet="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b65c072152ab63f7801aad_about-small-p-500.jpg 500w, https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b65c072152ab63f7801aad_about-small.jpg 676w"
              alt="About Image" /></div>
            <div className="about-heading">
              <h2 className="about-title">Introducing Our Bookstore and Community</h2>
              <div className="body-small">Discover our bookstore and community, where stories unfold and connections
                flourish.</div>
            </div>
          </div>
          <div className="about-data-wrap">
            <div className="about-image-wrap">
              <div className="about-img-big"><img
                src="../cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b65c076e64fe4278c64362_about-big.jpg"
                loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 47vw, 48vw"
                srcSet="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b65c076e64fe4278c64362_about-big-p-500.jpg 500w, https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b65c076e64fe4278c64362_about-big-p-800.jpg 800w, https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b65c076e64fe4278c64362_about-big.jpg 1202w"
                alt="About Image" /></div>
            </div>
            <div className="about-info">
              <p className="about-text">Welcome to Book Store: Empowering Minds Through Reading! We believe in the
                transformative power of books and their ability to shape and inspire individuals. Our mission is to
                create a vibrant and inclusive community that celebrates the joy of reading and encourages personal
                growth.</p>
              <div className="button-wrap">

                <Link href="/about"
                  className="primary-btn w-inline-block">
                  About us
                  <img
                    src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b509579ee5d800c56a7e21_ic-arrow.svg"
                    loading="eager" alt="Arrow" className="default-btn-arrow" />
                  <img
                    src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b50992f5ddcd2d97e7be88_ic-arrow-white.svg"
                    loading="eager" alt="Arrow" className="hover-btn-arrow" />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="explore-category r_container">
        <h1>Explore Categories</h1>
        <div className="explore">
          {explore.map((explores, index) => (
            <div
              key={index}
              className="explore-card"
              style={{ backgroundColor: explores.color }}
            >
              <img src={`${explores.image}`} alt="" width={200} height={200} />
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
          {popBook.map((popBooks, index) => (
            <div key={index} className="book-card">
              <img src={`${popBooks.image}`} alt="" width={300} height={400} />
              <h5 style={{marginBottom:"20px"}}>{popBooks.title}</h5>
              <Link href="/read/books/chapters" className="next-btn">Read</Link>
              <Link href="/product/product_page" className="btn" style={{marginLeft:"30px"}}>Buy</Link>
            </div>
          ))}
        </div>
        <div className="next-button">
          <Link href="/shop" className="next-btn">
            View All
            <IoMdArrowForward />
          </Link>
        </div>
      </div>
      <div className="facility r_container">
        <div className="facility-card">
          {card.map((cards, index) => (
            <div
              key={index}
              className="facilities"
              style={{ backgroundColor: cards.color, }}
            >
              <div style={{ width: "50%" }}>
                <h4>{cards.title}</h4>
                <p>{cards.description}</p>
              </div>
              <div>
                <img
                  src={`${cards.img_url}`}
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="r_container trending-books">
        <div className="latest-coll trending">Latest Collection</div>
        <h1>New Arrival Books</h1>
        <div className="book-store">
          {newBook.map((newBooks, index) => (
            <div key={index} className="book-card">
              <img src={`${newBooks.image}`} alt="" width={300} height={400} />
              <h5 style={{marginBottom:"20px"}}>{newBooks.title}</h5>
              <Link href="/read/books/chapters" className="next-btn">Read</Link>
              <Link href="/product/product_page" className="btn" style={{marginLeft:"30px"}}>Buy</Link>
            </div>
          ))}
        </div>
        <div className="next-button">
          <Link href="/shop" className="next-btn">
            View All Books
            <IoMdArrowForward />
          </Link>
        </div>
      </div>

      <div className="featured-book ">
        <div className="r_container">
          <h1>Featured Book of the Week</h1>
          <div className="featured-info">
            <img
              src="/home_images/almanack.jpg"
              alt=""
            />
            <div className="book-details">
              <h4>The Almanack Of Naval Ravikant</h4>
              <p>
                Getting rich is not just about luck;happiness is just a
                trait we bornwith these.Aspirations may seem out of reach,but
                bulding wealth and being happy are skills we learn{" "}
              </p>
              <p>
                So,what are these skills,and how do we learn them?What are the
                principles that should guide our efforts?
              </p>
              <h5>Eric Jorgenson</h5>
              <p>$10.36 USD</p>
              <br /> <br />
              <Link href="/shop" className="next-btn">
                Shop now
              </Link>
            </div>
            <div className="more-books">
              <div className="books">
                <img
                  src="/home_images/psychology.jpg"
                  alt=""
                />
                <div className="book-desc">
                  <h4>
                    The Psychology Of <br />
                    Money
                  </h4>
                  <p>$6.40 USD</p>
                </div>
              </div>
              <hr />
              <br />
              <div className="books">
                <img
                  src="/home_images/12rules.jpg"
                  alt=""
                />
                <div className="book-desc">
                  <h4>12 Rules for Liife</h4>
                  <p>$9.74 USD</p>
                </div>
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
            <img src="/blog_right.jpg" alt="" />
            <p>July 25,2023</p>
            <h4>A Journey into the Inchanting Depths Of Books</h4>
            <p>
              Our collection of boooks is valuable resource for nuturing your
              artistic growth and expanding your creative horizons
            </p>
          </div>
          <div className="blog-left-section">
            <div className="side-section">
              <img src="/blog1_left.jpg" alt="" />
              <div className="blog-side-info">
                <p>July 25,2023</p>
                <h4>Embracing your Inner Strength And Achieving</h4>
                <p>
                  Embracing your inner strength empower you to face challenges
                </p>
              </div>
            </div>
            <div className="side-section">
              <img src="/blog2_left.jpg" alt="" />
              <div className="blog-side-info">
                <p>July 23,2023</p>
                <h4>Books to Inspire, Motivate, And Unleash</h4>
                <p>
                  Our collection of books is a valuable resource for nuturing
                  your artistic
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="next-button">
          <Link href="/blog" className="next-btn">
            View All
            <IoMdArrowForward />
          </Link>
        </div>
      </div>

      <FooterBase />
    </>
  );
};
export default page;
