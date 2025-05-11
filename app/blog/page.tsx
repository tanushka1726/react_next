import React from "react";
import Header from "@/components/Header/Header";
import "./page.css"
import { IoMdArrowForward } from "react-icons/io";
type blogs={
    image:string;
    date:string;
    title:string;
    info:string;
}
const blog :blogs[]=[
    {
        image:"/bolg_images/blog1.jpg",
        date:"July 23,2023",
        title:"A Journey into the Enchanting Depths of books",
        info:"Our coolection of books is a valuable resource for nuturing your artistic growth and expanding your creative horizons"
    },
    {
        image:"/bolg_images/blog2.jpg",
        date:"July 20,2023",
        title:"Discovering Strengths and Embracing change",
        info:"These captivating stories chronicle the lives of individuals who have faced adversity head-on,overcome challenges,and emerged stronger than ever"
    },
    {
        image:"/bolg_images/blog3.jpg",
        date:"July 20,2023",
        title:"Books of Personal Growth and Self-Discovery",
        info:"Books of personal growth and self discovery are powerful tools that can help individuals unlock their potential,gain self-awareness,and create positive changes  in their lives"

    },
    {
        image:"/bolg_images/blog4.jpg",
        date:"July 20,2023",
        title:"Shop Your Favourite Reads Anytime,Anywhere books",
        info:"Shop your favourite reads anytime,anywhere with our convenient online bookstore.With just a few clicks,you can explore new words,gain knowledge,and induldge in captivating stories",

    },
    {
        image:"/bolg_images/blog5.jpg",
        date:"July 20,2023",
        title:"Unleasing the Power of Positive thinking",
        info:"Positive is not about denying reality or ignoring negative situations.Instead,it's about focusing on the possiblities,finding the silver lining,and maintaining a hopeful attitude"

    },
    {
        image:"/bolg_images/blog6.jpg",
        date:"July 20,2023",
        title:"Books to Inspire,Motivate,and Unleash Your Inner Artist",
        info:"Our coolection of books is a valuable resource for nuturing your artistic growth and expanding your creative horizons"
    }
]
const page = () => {
  return (
    <>
    <Header/>
    <div className="blog-collection">
      <h1>Our Blogs</h1>
      <h5>In a world that can sometimes feel overwhelming and challenging, <br /> positive thinking offers a ray of hope and a path to a brighter future.</h5>
    </div>
    <div className="book-blogs r_container">
        {blog.map((blogs,index)=>(
            <a className="blog-card">
                <img src={`${blogs.image}`} alt="" width={530} height={400}/>
                <div className="blog-info">
                    <h4>{blogs.date}</h4>
                    <h1>{blogs.title}</h1>
                    <h4>{blogs.info}</h4>
                    <a href="">Read More<IoMdArrowForward /></a>
                </div>
            </a>
        ))}
          <hr />
          <br /> <br />
          <div className="next-button" >
              <a href="/blog" className="next-btn">Next<IoMdArrowForward /></a>
        </div>
    </div>
        
    </>
  )
};
export default page;