import React from "react";
import Banner from "@/components/Banner/Banner";
import "./category.css";
import Image from "next/image";
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
const page = () => {
  return (
    <>
      <Banner
        title="Self Help"
        description="Discover empowering stories and exercises that inspire positive change. Unlock your potential and create a life you love with self-help books."
      />
      <div className="r_container category_container">
        <div className="container">
          <div className="row">
            {newBook.map((book_card, index) => (
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4"
                key={index}
              >
                <div className="book_card h-100">
                  <Image
                    src={book_card.image}
                    alt={book_card.title}
                    width={300}
                    height={430}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-title">{book_card.title}</p>
                    <span className="card-text">{book_card.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
