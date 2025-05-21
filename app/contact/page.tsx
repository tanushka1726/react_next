'use client';
import React, { useState } from "react";

import Banner from "@/components/Banner/Banner";
import "./page.css"
import { IoMdArrowForward } from "react-icons/io";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How can I place an order for books on your website?",
    answer:
      "You can place an order by browsing our catalog, adding books to your cart, and checking out using our secure payment gateway.",
  },
  {
    question: "How long does it take to receive my order?",
    answer: "Orders are typically delivered within 3–7 business days depending on your location.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping charges and delivery time vary by destination.",
  },
  {
    question: "Are digital books (e-books) available on your platform?",
    answer: "Yes, we offer a wide range of e-books that you can download instantly after purchase.",
  },
  {
    question: "Do you have a loyalty program for frequent customers?",
    answer: "Yes, our loyalty program rewards frequent buyers with exclusive discounts and early access to new releases.",
  },
  {
    question: "How can I contact customer support for assistance?",
    answer: "You can contact our customer support via the Contact Us page or call our support line at +123-456-7890.",
  },
];


const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };
  return (
    <>
      <Banner title="Get in Touch" description="Connect with us and share your thoughts, questions, or feedback. We're here to assist you!" />
      <div className="customer-support r_container">
        <div className="left-section-support">
          <div className="get-touch">Get in Touch</div>
          <h1>Cutomer Support</h1>
          <div className="contact-data">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="22" fill="#E5E6E1" />
              <path d="M27 30.5H17C14 30.5 12 29 12 25.5V18.5C12 15 14 13.5 17 13.5H27C30 13.5 32 15 32 18.5V25.5C32 29 30 30.5 27 30.5Z" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M27 19L23.87 21.5C22.84 22.32 21.15 22.32 20.12 21.5L17 19" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h5>hello123@gmail.com</h5>
          </div>
          <div className="contact-data">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="22" fill="#E5E6E1" />
              <path d="M31.97 28.33C31.97 28.69 31.89 29.06 31.72 29.42C31.55 29.78 31.33 30.12 31.04 30.44C30.55 30.98 30.01 31.37 29.4 31.62C28.8 31.87 28.15 32 27.45 32C26.43 32 25.34 31.76 24.19 31.27C23.04 30.78 21.89 30.12 20.75 29.29C19.6 28.45 18.51 27.52 17.47 26.49C16.44 25.45 15.51 24.36 14.68 23.22C13.86 22.08 13.2 20.94 12.72 19.81C12.24 18.67 12 17.58 12 16.54C12 15.86 12.12 15.21 12.36 14.61C12.6 14 12.98 13.44 13.51 12.94C14.15 12.31 14.85 12 15.59 12C15.87 12 16.15 12.06 16.4 12.18C16.66 12.3 16.89 12.48 17.07 12.74L19.39 16.01C19.57 16.26 19.7 16.49 19.79 16.71C19.88 16.92 19.93 17.13 19.93 17.32C19.93 17.56 19.86 17.8 19.72 18.03C19.59 18.26 19.4 18.5 19.16 18.74L18.4 19.53C18.29 19.64 18.24 19.77 18.24 19.93C18.24 20.01 18.25 20.08 18.27 20.16C18.3 20.24 18.33 20.3 18.35 20.36C18.53 20.69 18.84 21.12 19.28 21.64C19.73 22.16 20.21 22.69 20.73 23.22C21.27 23.75 21.79 24.24 22.32 24.69C22.84 25.13 23.27 25.43 23.61 25.61C23.66 25.63 23.72 25.66 23.79 25.69C23.87 25.72 23.95 25.73 24.04 25.73C24.21 25.73 24.34 25.67 24.45 25.56L25.21 24.81C25.46 24.56 25.7 24.37 25.93 24.25C26.16 24.11 26.39 24.04 26.64 24.04C26.83 24.04 27.03 24.08 27.25 24.17C27.47 24.26 27.7 24.39 27.95 24.56L31.26 26.91C31.52 27.09 31.7 27.3 31.81 27.55C31.91 27.8 31.97 28.05 31.97 28.33Z" fill="#E5E6E1" stroke="black" strokeMiterlimit="10" />
            </svg>
            <h5>+712745855</h5>
          </div>
          <div className="contact-data">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="22" fill="#E5E6E1" />
              <path d="M13.6197 18.49C15.5897 9.83 28.4197 9.84 30.3797 18.5C31.5297 23.58 28.3697 27.88 25.5997 30.54C23.5897 32.48 20.4097 32.48 18.3897 30.54C15.6297 27.88 12.4697 23.57 13.6197 18.49Z" fill="#E5E6E1" stroke="black" />
              <path d="M21.9999 23.43C23.723 23.43 25.1199 22.0331 25.1199 20.31C25.1199 18.5869 23.723 17.19 21.9999 17.19C20.2768 17.19 18.8799 18.5869 18.8799 20.31C18.8799 22.0331 20.2768 23.43 21.9999 23.43Z" fill="#E5E6E1" stroke="black" />
            </svg>
            <h5>2972 Westheimer Rd. Santa <br /> Ana, Illinois 85486</h5>
          </div>
          <div />
        </div>
        <div className="right-section-suuport">
          <form action="">
            <div className="flex-down-full">
              <label htmlFor="name">Name</label>
              <input type="text" />
            </div>
            <div className="info">
              <div className="flex-down">
                <label htmlFor="subject">Subject</label>
                <input type="text" />
              </div>
              <div className="flex-down">
                <label htmlFor="email">Email</label>
                <input type="text" />
              </div>
            </div>
            <div className="flex-down-full message-info">
              <label htmlFor="message">Message</label>
              <textarea rows={4} />
            </div>
          </form>
        </div>
      </div>

      <div className="next-button">
        <a href="" className="next-btn">Submit<IoMdArrowForward /></a>
      </div>
      <div className="location_container">
        <div className="location r_container">
          <h1>Our Stores Location</h1>
          <div className="loaction-info">
            <div className="location-card">
              <h3>New York</h3>
              <p>
                2118 Thornridge Cir. Syracuse, Connecticut 35624 <br />
                Phone +214 714 5347 <br />
                Email: hello@readster.com
              </p>
            </div>
            <div className="location-card">
              <h3>Philadelphia</h3>
              <p>
                2715 Ash Dr. San Jose, South Dakota 83475 <br />
                Phone +0283 555 0029 <br />
                Email: hello@readster.com
              </p>
            </div>
            <div className="location-card">
              <h3>San Diego</h3>
              <p>
                3517 W. Gray St. Utica, Pennsylvania 57867 <br />
                Phone +307 555-0133 <br />
                Email: hello@readster.com

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="questions r_container">
        <div className="FAQ">FAQ</div>
        <h1>Frequently Asked Questions</h1>
        <div className="question">
          <img src="/question.jpg" alt="question" />
          <div className="accordion basic-questions" id="faqAccordion">
            {faqData.map((item, index) => (
              <div className="accordion-item FAQ" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button question_acc d-flex justify-content-between align-items-center ${activeIndex === index ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={activeIndex === index}
                    aria-controls={`collapse${index}`}
                  >
                    <h5 className="mb-0">{item.question}</h5>
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>


    </>

  );

};
export default Page;
