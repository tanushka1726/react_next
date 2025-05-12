import React from "react";
import Banner from "@/components/Banner/Banner";
import "./review.css"
import Image from "next/image";
type reviewType = {
  img: string;
  heading: string;
  para: string;
  bgcolor: string;
};
const reviewCards : reviewType[] = [
    {
        heading: "Ronald Richards",
        para: "I recently purchased a book from your store, and it was an absolute delight. The author's storytelling skills were exceptional, and the characters felt so real.",
        bgcolor: "linear-gradient(to bottom, var(--purple), var(--purple) 20%, rgba(255, 255, 255, 0) 60%, rgba(238, 236, 243, 0))",
        img: "review_image1.jpg"
    },
    {
        heading: "Cody Fisher",
        para: "Thank you for curating such amazing books in your store. The storyline was captivating, the characters were well-developed, and the writing style was engaging.",
        bgcolor: "linear-gradient(to bottom, var(--pink), var(--pink) 20%, rgba(202, 157, 162, 0) 60%, rgba(202, 157, 162, 0))",
        img: "review_image2.jpg"
    },
    {
        heading: "Jenny Wilson",
        para: "I'm so glad I stumbled upon your book store and found this hidden gem. I'm grateful to have discovered such a fantastic book at your store, and I can't wait to explore more titles in the future.",
        bgcolor: "linear-gradient(to bottom, var(--yellow), var(--yellow) 20%, rgba(228, 185, 118, 0) 60%, rgba(228, 185, 118, 0))",
        img: "review_image3.jpg"
    },
    {
        heading: "Robert Fox",
        para: "Readster has transformed my reading habits. With its offline reading feature, I can enjoy my favorite books even without an internet connection.",
        bgcolor: "linear-gradient(#aebbba, #aebbba 20%, rgba(174, 187, 186, 0) 60%, rgba(174, 187, 186, 0))",
        img: "review_image4.jpg"
    },
    {
        heading: "Leslie Alexander",
        para: "Readster has become my reading companion wherever I go. The cross-platform compatibility and cloud storage make it effortless to switch between devices.",
        bgcolor: "linear-gradient(#857871, #857871 20%, rgba(133, 120, 113, 0) 60%, rgba(133, 120, 113, 0))",
        img: "review_image5.jpg"
    },
    {
        heading: "Jerome Bell",
        para: "Readster has completely transformed my reading experience. The vast collection of books, and seamless synchronization across devices have made it my go-to platform.",
        bgcolor: "linear-gradient(#a3bbd0, #a3bbd0 20%, rgba(163, 187, 208, 0) 60%, rgba(163, 187, 208, 0))",
        img: "review_image6.jpg"
    },
]
const page = () => {
  return (
    <>
      <Banner
        title="Customer Review"
        description="Discover what our customers are saying about their Readster experience and be inspired by their reviews."
      />
    <div className="container">
        <div className="cards">
            {reviewCards.map((card, index)=> (
                <div key={index} className="review_card">
                    <div className="review_overlay" style={{backgroundImage: card.bgcolor}}></div>
                    <div className="review_info">
                        <h3>{card.heading}</h3>
                        <p>{card.para}</p>
                    </div>
                    <img className="review_image"  alt={card.heading + "Image"} src={`/review_img/${card.img}`} />
                </div>
            ))}
        </div>
    </div>
    </>
  );
};

export default page;
