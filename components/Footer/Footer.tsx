import React from "react";
import "./Footer.css";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
type SocialIcon = {
  icon: React.ElementType;
  url: string;
};

const social_icons: SocialIcon[] = [
  { icon: FaFacebookF, url: "https://facebook.com" },
  { icon: FaInstagram, url: "https://instagram.com" },
  { icon: FaYoutube, url: "https://youtube.com" },
  { icon: FaXTwitter, url: "https://twitter.com" },
];

const page = () => {
  return (
    <>
      <div className="footer-section">
        <div className="r_container ">
          <div className="footer_content">
            <div className="left-footer-section">
              <Image
                src="/header_images/logo.svg"
                alt="logo"
                width={139}
                height={21}
              />
              <h2 className="footer_heading">
                Start Your Empowering Reading Adventure
              </h2>

              <button type="button" className="contact_btn">
                Contact us
                <i>
                  <FaArrowRightLong />
                </i>
              </button>
            </div>
            <div className="right-footer-section">
              <div className="basic-right-section">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/customer-review">Review</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/category-list">Category</Link>
              </div>
              <div className="privacy-right-section">
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/return-policy">Return Policy</Link>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              Designed By <span>DEVZI</span>.
            </p>
            <div className="social_icons">
              {social_icons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link href={social.url} key={index}>
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
