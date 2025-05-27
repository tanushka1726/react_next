import React from "react";

import "./page.css"
import { IoMdArrowForward } from "react-icons/io";
import Banner from "@/components/Banner/Banner"
import Link from "next/link";
type blogs={
    image:string;
    date:string;
    title:string;
    info:string;
    slug: string;
}
const blog :blogs[]=[
    {
        image:"/bolg_images/blog1.jpg",
        date:"July 23,2023",
        title:"A Journey into the Enchanting Depths of books",
        info:"Our coolection of books is a valuable resource for nuturing your artistic growth and expanding your creative horizons",
        slug: "title-1"
    },
    {
        image:"/bolg_images/blog2.jpg",
        date:"July 20,2023",
        title:"Discovering Strengths and Embracing change",
        info:"These captivating stories chronicle the lives of individuals who have faced adversity head-on,overcome challenges, and emerged stronger than ever",
        slug: "title-2"
    },
    {
        image:"/bolg_images/blog3.jpg",
        date:"July 20,2023",
        title:"Books of Personal Growth and Self-Discovery",
        info:"Books of personal growth and self discovery are powerful tools that can help individuals unlock their potential,gain self-awareness, and create positive changes  in their lives",
        slug: "title-3"

    },
    {
        image:"/bolg_images/blog4.jpg",
        date:"July 20,2023",
        title:"Shop Your Favourite Reads Anytime, Anywhere books",
        info:"Shop your favourite reads anytime, anywhere with our convenient online bookstore.With just a few clicks,you can explore new words, gain knowledge,and induldge in captivating stories",
        slug: "title-4"
    },
    {
        image:"/bolg_images/blog5.jpg",
        date:"July 20,2023",
        title:"Unleasing the Power of Positive thinking",
        info:"Positive is not about denying reality or ignoring negative situations. Instead, it's about focusing on the possiblities, finding the silver lining,and maintaining a hopeful attitude",
        slug: "title-5"

    },
    {
        image:"/bolg_images/blog6.jpg",
        date:"July 20,2023",
        title:"Books to Inspire, Motivate, and Unleash Your Inner Artist",
        info:"Our coolection of books is a valuable resource for nuturing your artistic growth and expanding your creative horizons",
        slug: "title-6"
    }
]
const page = () => {
  return (
    <>
    <Banner title="Our Blogs" description="In a world that can sometimes feel overwhelming and challenging, positive thinking offers a ray of hope and a path to a brighter future."/>
    
    <div className="book-blogs r_container">
        {blog.map((blogs,index)=>(
            <Link href={`/blog/${blogs.slug}`}  className="blog-card" key={index}>
                <img src={`${blogs.image}`} alt=""/>
                <div className="blog-info">
                    <h4>{blogs.date}</h4>
                    <h1>{blogs.title}</h1>
                    <h4>{blogs.info}</h4>
                    <span >Read More<IoMdArrowForward /></span>
                </div>
            </Link>
        ))}
         
         
          <div className="next-button" >
              <Link href="/blog" className="next-btn">Next<IoMdArrowForward /></Link>
        </div>
    </div>
        
    </>
  )
};
export default page;