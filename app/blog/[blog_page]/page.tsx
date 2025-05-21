
import React from "react";
import "./page.css"
import BlogBanner from "@/components/Banner/BlogBanner";
import Link from "next/link";
const page = ()=>{
    return(
        <>
        <BlogBanner title="Books for Personal Growth Sand elf-Discovery" img="/self-discover1.jpg" />
        <div className="second-section r_container">
            <div className="mid-section1">
             <p>Our user-friendly website ensures a seamless browsing and shopping experience. You can easily search for specific titles, authors, or genres, or simply browse through our curated recommendations.  Shop your favorite reads anytime, anywhere, and let the captivating world of books accompany you wherever you go.</p>
             <h5>Shop Your Favorite Reads 24/7 at Our Online Bookstore</h5>
             <ol>
                <li>1.Nibh libero condimentum duis turpis pretium molestie netus turpis</li>
                <li>2.Turpis lacus sed sagittis mollis sitquam ipsum</li>
                <li>3.Feugiat maurisac ultricies cursus sollicitudin acmauris</li>
                <li>4.Arcu rutrum luctus libero elementum quis libero enim utgravida quis</li>
                <li>5.Molestie sem cursus pulvinar euismod pulvinar nisi at nisi consequat integer neque arcu.</li>
                <li>6.Consequat vulputate pellentesque cursus venenatis egestas.</li>
             </ol>
             <img src="/self-discover2.jpg" alt="" />
             <div className="message">At our online book store, we believe in the transformative power of books.We are committed to providing a seamless and enjoyable shopping experience. With secure payment options and prompt delivery, we ensure that your book-buying journey is hassle-free.</div>
             <p>Odio augue morbi elementum lectus metus nec phasellus. Donec non auctor tellus nibh elementum nunc elementum. Aenean diam sed tincidunt urna. Vitae magna nam vitae mauris. Pellentesque lacus eget mattis gravida elementum nisi vestibulum. Morbi lectus massa in cras cursus id scelerisque tincidunt.</p>

           </div>
        </div>
        <div className="third-section r_container">
            <div className="mid-section2">
                <h4>Book Discovery Made Easy: Find and Buy Your Must-Reads</h4>
                <p>Sollicitudin feugiat nisl, lorem interdum pellentesque. Massa, scelerisque in placerat rutrum hac scelerisque habitasse. Amet ultricies massa nec, ornare faucibus facilisi quisque leo iaculis. Velit consequat in aliquet ullamcorper tristique pulvinar adipiscing sem. Imperdiet augue cras pretium at lectus congue leo feugiat. Eget sit nunc nullam fringilla ut sem eget quis.</p>
                <ul>
                    <li>Sit vulputate aliquam cras aliquam etnibh congue consequat pellentesque</li>
                    <li>Vestibulum massa aliquet odio mauris duis amet nsed dapibus porta est amet</li>
                    <li>Urna augue arcu duis eget proin sed morbi purus sit nunc sodales aliquam</li>
                    <li>Netus nunc risus interdum feugiat et nunc pellentesque mus.</li>
                    <li>liEgestas vitae orci mauris a donec convallis volutpat </li>
                </ul>
                <img src="/self-discover3.jpg" alt="" />
                <h4>Captivating Charms: Unleashing the Enchantment of Boutique Elegance</h4>
                <p>Ac amet turpis ornare rhoncus. Sed sed ornare elit ut commodo feugiat commodo faucibus purus. Vitae sapien purus id eget neque nulla posuere pellentesque turpis. Aliquam hac amet rhoncus velit vel vitae. Sed lacinia neque amet quis lectus. Pharetra ut volutpat mauris et turpis volutpat eu nisl. A lectus nisi posuere egestas maecenas nulla.</p>
                <h5>Beauty Couture: Where Style and Sophistication Collide</h5>
                <p>Lobortis penatibus pharetra penatibus nunc morbi ut pulvinar odio nunc. Blandit non a nec leo quis posuere auctor. Amet nunc cras ut at. Gravida sit tempor dictumst odio eu nec blandit non.</p>
            </div>
        </div>
        <div className="fourth-section r_container">
            <h1>Similar Posts</h1>
            <div className="similar-img">
                <Link href="/" className="img">
                    <img src="/self-discover4.jpg" alt="" />
                    <p>July 20,2023</p>
                    <h4>Unleasing the power of positive thinking</h4>
                </Link>
                <Link  href="/" className="img">
                    <img src="/self-discover5.jpg" alt=""  />
                    <p>July 20,2023</p>
                    <h4>Embracing Your Inner Strength And Achieving Greatness</h4>
                </Link>
                
            </div>

        </div>

        </>
    )
}
export default page;