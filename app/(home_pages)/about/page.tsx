"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // basic styles
import React, { useRef } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Banner from "@components/Banner/Banner";
import "./page.css";
// import Image from "next/image";
import FooterBase from "@/components/FooterBase/FooterBase";
import Banner from "@/components/Banner/Banner"

import { Swiper as SwiperCore } from "swiper";

const Page = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();
  // const goTo = (index: number) => swiperRef.current?.slideToLoop(index);

  type reviewType = {
    img: string;
    heading: string;
    para: string;
    bgcolor: string;
  };
  const reviewCards: reviewType[] = [
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

  return (
    <>
      <Banner title="About us" description="At Readster, we believe in the power of literature to transport us to
          new worlds, ignite our imagination, and inspire personal
          growth."/>
      <div className="about-our-story r_container">
        <div className="about-first-left-section">
          <img src="our_story.jpg" alt="our-story" />
          <div className="our_story our_desktop">Our story</div>
        </div>
        <div className="about-first-right-section">
          <img src="about_book.jpg" alt="books" />
          <div className=" mobile_our_story">
            <div className="our_story">Our story</div>
          </div>
          <p>
            Welcome to Readster, your ultimate destination for all things books!
            At Readster, we believe in the power of literature to inspire,
            educate, and entertain. As passionate bookworms ourselves, we have
            curated a vast collection of titles spanning various genres,
            ensuring there&apos;s something for every reader. Whether you&apos;re a fan of
            gripping mysteries, heartwarming romances, thought-provoking
            non-fiction, or captivating fantasy worlds, our book store is your
            haven. We carefully select each book, prioritizing quality,
            diversity, and literary excellence.
          </p>
        </div>
      </div>
      <div className="work-with-us r_container">
        <img src="work-with-us.jpg" alt="work" />
        <div className="work-para">
          <h1>Work With Us</h1>
          <p>
            We work in an environment that stimulates creativity and provides an
            opportunity to work with the best authors, editors and creative
            minds in the country. We take pride in a culture that is spirited,
            playful and imaginative. <br />
            And fosters people to do the best work of their lives, making us not
            only a leading brand for our authors and readers but also for the
            people who are behind it.
          </p>
        </div>
      </div>
      <div className="publish r_container">
        <div className="publish-para">
          <h1>Publishing Divisions</h1>
          <p>
            Readster has four dedicated, yet independent, publishing divisions
            that discover and publish a wide range of voices. Each division has
            a distinct identity and personality and comprises imprints that
            represent different categories of books.
          </p>
        </div>
        <img src="publish.jpg" alt="publish" />
      </div>
      <div className="publish-with-us r_container">
        <div className="publish-left-side">
          <h1>Publish With Us</h1>
          <p>
            If you have an exceptional idea for a book, perhaps some chapters or
            even a summary, and the gumption to put yourself out there for the
            world to read, you have come to the right place.
          </p>
          <div className="send-email">
            Send in : <span>submission@readster.com</span>{" "}
          </div>
        </div>
        <div className="publish-right-side">
          <ul>
            <li>Covering letter( optional )</li>
            <hr />
            <li>Author bio</li>
            <hr />
            <li>Synopsis</li>
            <hr />
            <li>3 sample Chapters</li>
          </ul>
        </div>
      </div>
      <div className="team-members r_container">
        <div className="members">Members</div>
        <h1>Our Team</h1>
        <div className="team-member-info">
          <div className="team-members-card">
            <img src="ester.jpg" alt="ester" />
            <div className="member-name">Ester Howard</div>
          </div>
          <div className="team-members-card">
            <img src="jenny.jpg" alt="jenny" />
            <div className="member-name">Jenny Wilson</div>
          </div>
          <div className="team-members-card">
            <img src="robert.jpg" alt="robert" />
            <div className="member-name">Robert Fox</div>
          </div>
          <div className="team-members-card">
            <img src="cody.jpg" alt="cody" />
            <div className="member-name">Cody Fisher</div>
          </div>
        </div>
      </div>
      <div className="review r_container">
        <div className="review-card">
          <h1>128k+</h1>
          <p>Book Collection</p>
        </div>
        <div className="review-card">
          <h1>75k+</h1>
          <p>Happy readers</p>
        </div>
        <div className="review-card">
          <h1>34M+</h1>
          <p>Fund Raised</p>
        </div>
        <div className="review-card">
          <h1>
            <span>15+</span>
          </h1>
          <p>World Wide Stores</p>
        </div>
        <svg
          width="110"
          height="110"
          viewBox="0 0 127 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="state-img-wrap"
        >
          <g opacity="0.15">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M38.8955 59.1331C46.536 62.3462 54.7267 64 63 64C71.2733 64 79.4671 62.3462 87.1136 59.1331C94.7602 55.9201 101.71 51.2105 107.565 45.2735C113.421 39.3365 118.068 32.2882 121.242 24.5311C124.415 16.774 126.052 8.46003 126.06 0.0638122H124.925C124.917 8.30875 123.31 16.4729 120.193 24.0903C117.077 31.7076 112.514 38.6289 106.763 44.4589C101.013 50.289 94.189 54.9136 86.6802 58.0688C79.1715 61.224 71.1253 62.848 63.0011 62.848C54.8769 62.848 46.8338 61.224 39.3309 58.0688C31.8281 54.9136 25.0125 50.289 19.2734 44.4589C13.5342 38.6289 8.98377 31.7076 5.88195 24.0903C2.78014 16.4729 1.18766 8.30874 1.19543 0.0638084H0.0602984C0.0523799 8.46003 1.67408 16.774 4.83281 24.5311C7.99154 32.2882 12.6254 39.3365 18.4699 45.2735C24.3144 51.2105 31.255 55.9201 38.8955 59.1331Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40.6374 54.8758C47.7272 57.8573 55.3276 59.3918 63.0046 59.3918C70.6816 59.3918 78.2849 57.8573 85.3804 54.8758C92.4758 51.8942 98.9244 47.5242 104.358 42.015C109.792 36.5059 114.104 29.9656 117.049 22.7676C119.993 15.5696 121.513 7.85476 121.52 0.0636692H120.385C120.378 7.70347 118.888 15.2685 116 22.3267C113.113 29.385 108.884 35.7983 103.556 41.2004C98.2281 46.6026 91.9046 50.8878 84.947 53.8114C77.9893 56.7351 70.5337 58.2398 63.0057 58.2398C55.4778 58.2398 48.025 56.7351 41.0728 53.8114C34.1207 50.8878 27.8053 46.6026 22.4874 41.2004C17.1694 35.7983 12.953 29.385 10.0788 22.3267C7.20465 15.2685 5.72905 7.70347 5.73625 0.0636653H4.60112C4.59377 7.85475 6.09859 15.5695 9.02967 22.7676C11.9607 29.9656 16.2607 36.5059 21.6839 42.015C27.1072 47.5242 33.5476 51.8942 40.6374 54.8758Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.3793 50.6181C48.9184 53.3681 55.9285 54.7834 63.0092 54.7834C70.09 54.7834 77.1027 53.3681 83.6471 50.6181C90.1914 47.8682 96.1392 43.8375 101.151 38.7563C106.162 33.6751 110.14 27.6427 112.856 21.0038C115.572 14.3648 116.973 7.24925 116.98 0.0632972H115.845C115.838 7.09796 114.466 14.0637 111.807 20.5629C109.149 27.0621 105.255 32.9674 100.349 37.9417C95.4428 42.916 89.6202 46.8618 83.2137 49.5538C76.8071 52.2459 69.942 53.6314 63.0103 53.6314C56.0787 53.6314 49.2162 52.2459 42.8147 49.5538C36.4132 46.8618 30.5981 42.916 25.7014 37.9417C20.8046 32.9674 16.9222 27.0621 14.2757 20.5629C11.6292 14.0637 10.2704 7.09796 10.2771 0.0632896H9.14194C9.13516 7.24925 10.5231 14.3648 13.2265 21.0038C15.9299 27.6427 19.8959 33.675 24.8979 38.7563C29.9 43.8375 35.8401 47.8682 42.3793 50.6181Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.1207 46.3622C50.1092 48.8806 56.5289 50.1768 63.0134 50.1768C69.4979 50.1768 75.92 48.8806 81.9133 46.3622C87.9065 43.8438 93.3534 40.1526 97.943 35.4992C102.533 30.8459 106.175 25.3216 108.662 19.2417C111.149 13.1618 112.433 6.64543 112.439 0.0645999H111.304C111.298 6.49414 110.044 12.8607 107.614 18.8008C105.184 24.741 101.625 30.1383 97.1411 34.6847C92.657 39.231 87.3353 42.8374 81.4799 45.2979C75.6244 47.7584 69.3499 49.0248 63.0145 49.0248C56.6791 49.0248 50.4069 47.7584 44.5561 45.2979C38.7053 42.8374 33.3904 39.231 28.9149 34.6847C24.4394 30.1383 20.8909 24.741 18.472 18.8008C16.0532 12.8607 14.8113 6.49414 14.8174 0.0645999H13.6823C13.6761 6.64542 14.9471 13.1618 17.4229 19.2417C19.8987 25.3216 23.5306 30.8459 28.1114 35.4992C32.6923 40.1526 38.1322 43.8438 44.1207 46.3622Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.8618 42.1046C51.2997 44.3914 57.1291 45.5684 63.0173 45.5684C68.9055 45.5684 74.7371 44.3914 80.1792 42.1046C85.6214 39.8178 90.5674 36.466 94.735 32.2405C98.9026 28.0151 102.21 22.9987 104.469 17.4779C106.727 11.9571 107.892 6.03992 107.898 0.064228H106.763C106.757 5.88864 105.622 11.656 103.42 17.0371C101.219 22.4181 97.9952 27.3074 93.9331 31.4259C89.871 35.5444 85.0502 38.8113 79.7458 41.0403C74.4415 43.2692 68.7575 44.4164 63.0184 44.4164C57.2792 44.4164 51.5974 43.2692 46.2972 41.0403C40.9971 38.8113 36.1824 35.5444 32.1281 31.4259C28.0739 27.3074 24.8593 22.4181 22.6682 17.0371C20.477 11.656 19.352 5.88863 19.3575 0.064228H18.2224C18.2167 6.03992 19.3709 11.9571 21.619 17.4779C23.8671 22.9987 27.1651 28.0151 31.3247 32.2405C35.4843 36.466 40.424 39.8178 45.8618 42.1046Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.6037 37.8472C52.4909 39.9024 57.73 40.9602 63.0219 40.9602C68.3138 40.9602 73.5549 39.9024 78.4459 37.8472C83.337 35.792 87.7822 32.7796 91.5277 28.982C95.2732 25.1845 98.2457 20.6761 100.276 15.7144C102.305 10.7526 103.353 5.43464 103.358 0.0640887H102.223C102.218 5.28336 101.2 10.4515 99.2273 15.2735C97.2546 20.0955 94.3658 24.4768 90.7258 28.1674C87.0858 31.858 82.7658 34.7855 78.0125 36.7829C73.2593 38.7802 68.1658 39.8082 63.023 39.8082C57.8801 39.8082 52.7886 38.7802 48.0391 36.7829C43.2896 34.7855 38.9752 31.858 35.3421 28.1674C31.7091 24.4768 28.8285 20.0955 26.865 15.2735C24.9015 10.4515 23.8934 5.28336 23.8983 0.0640849H22.7632C22.7581 5.43464 23.7954 10.7526 25.8159 15.7144C27.8363 20.6761 30.8003 25.1845 34.5387 28.982C38.2771 32.7796 42.7166 35.792 47.6037 37.8472Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.3442 33.5905C53.6806 35.4142 58.3294 36.3528 63.0251 36.3528C67.7207 36.3528 72.3713 35.4142 76.7112 33.5905C81.0511 31.7669 84.9954 29.0939 88.3189 25.7242C91.6424 22.3546 94.28 18.3542 96.0811 13.9515C97.8822 9.54886 98.8116 4.8301 98.8161 0.0646819H97.6809C97.6766 4.67882 96.7767 9.24777 95.0328 13.5107C93.2889 17.7736 90.735 21.647 87.517 24.9097C84.299 28.1723 80.48 30.7604 76.2778 32.5262C72.0756 34.292 67.5727 35.2008 63.0262 35.2008C58.4796 35.2008 53.9784 34.292 49.7796 32.5262C45.5807 30.7604 41.7665 28.1723 38.5547 24.9097C35.3428 21.647 32.7963 17.7736 31.0604 13.5107C29.3245 9.24777 28.4333 4.67882 28.4377 0.0646781H27.3025C27.298 4.8301 28.2185 9.54886 30.0113 13.9515C31.8041 18.3542 34.4341 22.3546 37.7512 25.7242C41.0684 29.0939 45.0077 31.7669 49.3442 33.5905Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M51.0863 29.3326C54.8721 30.9247 58.9306 31.7441 63.0299 31.7441C67.1293 31.7441 71.1893 30.9247 74.9781 29.3326C78.767 27.7406 82.2104 25.407 85.1119 22.4653C88.0134 19.5235 90.316 16.0311 91.8884 12.1875C93.4608 8.34389 94.2721 4.22434 94.276 0.0640486H93.1409C93.1371 4.07306 92.3553 8.0428 90.8401 11.7466C89.3249 15.4505 87.106 18.8159 84.31 21.6507C81.514 24.4855 78.1958 26.7341 74.5447 28.2683C70.8937 29.8025 66.9813 30.5921 63.031 30.5921C59.0807 30.5921 55.1698 29.8025 51.5217 28.2683C47.8735 26.7341 44.5595 24.4855 41.7689 21.6507C38.9783 18.8159 36.7657 15.4505 35.2575 11.7466C33.7493 8.0428 32.975 4.07305 32.9787 0.0640467H31.8436C31.8397 4.22433 32.6432 8.34389 34.2084 12.1875C35.7735 16.0311 38.0696 19.5235 40.9655 22.4653C43.8614 25.407 47.3005 27.7406 51.0863 29.3326Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M52.8284 25.0765C56.0636 26.437 59.5317 27.1372 63.0348 27.1372C66.5379 27.1372 70.0074 26.437 73.2451 25.0765C76.4828 23.716 79.4254 21.7219 81.9048 19.208C84.3843 16.6941 86.352 13.7097 87.6957 10.4252C89.0394 7.14063 89.7327 3.62029 89.736 0.0651301H88.6009C88.5977 3.469 87.9339 6.83955 86.6474 9.98431C85.3609 13.1291 83.4769 15.9865 81.1029 18.3934C78.729 20.8003 75.9117 22.7096 72.8117 24.0122C69.7117 25.3148 66.3899 25.9852 63.0359 25.9852C59.6819 25.9852 56.3613 25.3148 53.2638 24.0122C50.1663 22.7095 47.3526 20.8003 44.9832 18.3934C42.6138 15.9865 40.7352 13.1291 39.4546 9.98431C38.174 6.83954 37.5166 3.469 37.5198 0.0651263H36.3847C36.3813 3.62028 37.068 7.14063 38.4055 10.4252C39.7429 13.7097 41.705 16.6941 44.1797 19.208C46.6544 21.7219 49.5933 23.716 52.8284 25.0765Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.5691 20.8196C57.2536 21.9485 60.1314 22.5295 63.0382 22.5295C65.945 22.5295 68.8239 21.9485 71.5106 20.8196C74.1972 19.6906 76.6389 18.036 78.6963 15.95C80.7537 13.864 82.3865 11.3876 83.5015 8.6621C84.6165 5.93664 85.1918 3.0155 85.1945 0.065481L84.0594 0.065481C84.0568 2.86422 83.511 5.63555 82.4532 8.22125C81.3954 10.8069 79.8463 13.1564 77.8944 15.1354C75.9425 17.1144 73.626 18.6842 71.0772 19.7553C68.5283 20.8263 65.7971 21.3775 63.0393 21.3775C60.2815 21.3775 57.5513 20.8263 55.0045 19.7553C52.4576 18.6842 50.1441 17.1144 48.1959 15.1354C46.2478 13.1564 44.7031 10.8069 43.6502 8.22125C42.5973 5.63555 42.0568 2.86422 42.0594 0.0654791H40.9243C40.9215 3.0155 41.4913 5.93664 42.6011 8.6621C43.7109 11.3876 45.339 13.864 47.3925 15.95C49.446 18.036 51.8846 19.6906 54.5691 20.8196Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M56.3119 16.5605C58.4458 17.4578 60.7333 17.9197 63.0438 17.9197C65.3544 17.9197 67.6427 17.4578 69.7783 16.5605C71.9138 15.6631 73.8546 14.3478 75.49 12.6898C77.1254 11.0317 78.4232 9.06324 79.3095 6.89684C80.1958 4.73045 80.653 2.40852 80.6552 0.0636252H79.5201C79.518 2.25723 79.0903 4.42936 78.2612 6.45599C77.4321 8.48262 76.218 10.3241 74.6881 11.8752C73.1582 13.4263 71.3426 14.6567 69.3449 15.4962C67.3471 16.3356 65.2064 16.7677 63.0449 16.7677C60.8834 16.7677 58.7435 16.3356 56.7473 15.4962C54.7512 14.6567 52.9379 13.4263 51.4109 11.8752C49.884 10.3241 48.6733 8.48262 47.8481 6.45599C47.0228 4.42936 46.5991 2.25723 46.6012 0.0636252H45.4661C45.4638 2.40851 45.9168 4.73044 46.7989 6.89684C47.6811 9.06324 48.9752 11.0317 50.6075 12.6898C52.2397 14.3478 54.1781 15.6631 56.3119 16.5605Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.0526 12.3036C59.6358 12.9693 61.3329 13.312 63.0472 13.312C64.7615 13.312 66.4593 12.9693 68.0437 12.3036C69.6282 11.6378 71.0681 10.6619 72.2815 9.43175C73.4948 8.20156 74.4578 6.7411 75.1153 5.13378C75.7728 3.52645 76.1121 1.80373 76.1138 0.0639723H74.9786C74.9771 1.65245 74.6674 3.22537 74.067 4.69292C73.4666 6.16048 72.5874 7.49394 71.4796 8.61716C70.3718 9.74038 69.057 10.6314 67.6103 11.2393C66.1637 11.8471 64.6135 12.16 63.0483 12.16C61.4831 12.16 59.9335 11.8471 58.488 11.2393C57.0425 10.6314 55.7294 9.74038 54.6237 8.61716C53.518 7.49394 52.6413 6.16048 52.0437 4.69292C51.4461 3.22537 51.1393 1.65244 51.1408 0.0639713H50.0057C50.004 1.80373 50.34 3.52645 50.9946 5.13378C51.6491 6.7411 52.6092 8.20156 53.8203 9.43175C55.0313 10.6619 56.4694 11.6378 58.0526 12.3036Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.7317 7.98245C60.7642 8.41666 61.8711 8.64014 62.9891 8.64014C64.1071 8.64014 65.2144 8.41666 66.2477 7.98245C67.281 7.54825 68.2201 6.91183 69.0114 6.10953C69.8028 5.30723 70.4308 4.35476 70.8596 3.30651C71.2884 2.25825 71.5097 1.13474 71.5108 0.00011137H70.3756C70.3747 0.983453 70.1829 1.95716 69.8113 2.86565C69.4396 3.77414 68.8954 4.59962 68.2096 5.29494C67.5238 5.99027 66.7098 6.54183 65.8143 6.91814C64.9188 7.29445 63.9591 7.48813 62.9902 7.48813C62.0212 7.48813 61.062 7.29445 60.1671 6.91814C59.2723 6.54183 58.4594 5.99027 57.775 5.29494C57.0905 4.59961 56.5478 3.77414 56.1778 2.86565C55.8079 1.95716 55.6179 0.983452 55.6189 0.000110416H54.4837C54.4827 1.13474 54.7018 2.25825 55.1287 3.3065C55.5555 4.35476 56.1817 5.30723 56.9715 6.10953C57.7613 6.91183 58.6992 7.54825 59.7317 7.98245Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.5366 3.78854C62.0184 3.99117 62.535 4.09546 63.0567 4.09546C63.5785 4.09546 64.0952 3.99117 64.5774 3.78854L64.3607 3.25638L64.5774 3.78854C65.0596 3.58591 65.4979 3.28892 65.8671 2.91451C66.2364 2.5401 66.5295 2.09562 66.7296 1.60643C66.9297 1.11725 67.033 0.592938 67.0335 0.0634473H65.8984C65.898 0.441655 65.8242 0.81616 65.6813 1.16558C65.5384 1.515 65.329 1.83249 65.0652 2.09992C64.8015 2.36735 64.4884 2.57949 64.144 2.72423C63.7996 2.86896 63.4305 2.94346 63.0578 2.94346C62.6851 2.94346 62.3162 2.86896 61.972 2.72423C61.6278 2.57949 61.3152 2.36735 61.0519 2.09992C60.7887 1.83249 60.5799 1.515 60.4377 1.16558C60.2954 0.81616 60.2223 0.441655 60.2227 0.0634473H59.0875C59.087 0.592938 59.1893 1.11724 59.3885 1.60643C59.5877 2.09562 59.8799 2.5401 60.2485 2.91451C60.6171 3.28892 61.0548 3.58591 61.5366 3.78854Z"
              fill="black"
            />
          </g>
        </svg>
        <svg
          width="60"
          height="60"
          viewBox="0 0 72 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="state-graphics"
        >
          <path
            d="M64 61V36C64 20.536 51.464 8 36 8V8C20.536 8 8 20.536 8 36V61"
            stroke="#CA9DA2"
            strokeWidth="15"
          />
        </svg>
        <svg
          width="50"
          height="50"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="state-img"
        >
          <path
            d="M37 0C32.1411 -5.79419e-08 27.3298 0.957033 22.8407 2.81646C18.3517 4.67588 14.2728 7.40128 10.837 10.8371C7.40128 14.2728 4.67588 18.3517 2.81646 22.8407C0.957032 27.3298 -7.33675e-07 32.1411 0 37L37 37V0Z"
            fill="#E4B976"
          />
        </svg>

      </div>
      <div className="py-4 r_container">
        {/* Custom Navigation */}
        <div className="testimonials">
          <div className="testimonial">Testimonial</div>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <h1>What Readers Saying</h1>
          <div className="swiper_btn">
            <button className="btn " onClick={goPrev}>
              ←
            </button>
            <button className="btn" onClick={goNext}>
              →
            </button>
          </div>

        </div>

        {/* Swiper */}
        <div style={{ width: "100%", position: "relative" }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={3.5}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true, // ✅ This pauses autoplay on hover
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 1.5,
              },
              728: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3.5,
              },
            }}
            navigation={false} // ⛔ Hides default arrows
            pagination={false} // ⛔ Hides default dots
          >
            {reviewCards.map((card, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="review_card">
                  <div className="review_overlay" style={{ backgroundImage: card.bgcolor }}></div>
                  <div className="review_info">
                    <h3>{card.heading}</h3>
                    <p>{card.para}</p>
                  </div>
                  <img className="review_image" alt={card.heading + "Image"} src={`/review_img/${card.img}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Dots */}
        {/* <div className="pagination_swiper">
          {reviewCards.map((_, index) => (
            <div
              key={index}
              onClick={() => goTo(index)}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#000",
                opacity: 0.5,
                cursor: "pointer",
              }}
            />
          ))}
        </div> */}
      </div>
      <FooterBase />
    </>
  );
};
export default Page;
