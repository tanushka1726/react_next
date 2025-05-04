import React from "react";
import Header from "@/components/Header/Header";
import "./page.css"
const page = () => {
  return(
    <>
    <Header/>
    <div className="about-us-head">
      <h1>About us</h1>
      <h5> At  Readster, we believe in the power of literature to transport us to new <br /> worlds, ignite our imagination, and inspire personal growth.</h5>
    </div>
    <div className="about-our-story">
      <div className="about-first-left-section">
      <img src="our_story.jpg" alt="our-story" width={510} height={400}/>
      <div className="our_story">Our story</div>
      </div>
      <div className="about-first-right-section">
        <img src="about_book.jpg" alt="books" width={720} height={400} />
        <p>Welcome to Readster, your ultimate destination for all things books! At Readster, we believe in the power of literature to inspire, educate, and entertain. As passionate bookworms ourselves, we have curated a vast collection of titles spanning various genres, ensuring there's something for every reader. Whether you're a fan of gripping mysteries, heartwarming romances, thought-provoking non-fiction, or captivating fantasy worlds, our book store is your haven. We carefully select each book, prioritizing quality, diversity, and literary excellence.</p>
      </div>
    </div>
    <div className="work-with-us">
      <img src="work-with-us.jpg" alt="work" width={790} height={490}/>
      <div className="work-para">
        <h1>Work With Us</h1>
        <p>We work in an environment that stimulates creativity and provides an opportunity to work with the best authors, editors and creative minds in the country. We take pride in a culture that is spirited, playful and imaginative. <br />And fosters people to do the best work of their lives, making us not only a leading brand for our authors and readers but also for the people who are behind it.</p>

      </div>
    </div>
    <div className="publish">
      <div className="publish-para">
        <h1>Publishing Divisions</h1>
        <p>Readster has four dedicated, yet independent, publishing divisions that discover and publish a wide range of voices. Each division has a distinct identity and personality and comprises imprints that represent different categories of books.</p>

      </div>
      <img src="publish.jpg" alt="publish" width={790} height={450}/>
    </div>
    <div className="publish-with-us">
      <div className="publish-left-side">
        <h1>Publish With Us</h1>
        <p>If you have an exceptional idea for a book, perhaps some chapters or even a summary, and the gumption to put yourself out there for the world to read, you have come to the right place.</p>
        <div className="send-email">Send in : <span>submission@readster.com</span> </div>
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
    <div className="team-members">
     <div className="members">Members</div>
     <h1>Our Team</h1>
     <div className="team-member-info">
       <div className="team-members-card">
         <img src="ester.jpg" alt="ester" width={300} height={400} />
         <div className="member-name">Ester Howard</div>
       </div>
       <div className="team-members-card">
        <img src="jenny.jpg" alt="jenny" width={300} height={400} />
        <div className="member-name">Jenny Wilson</div>
       </div>
       <div className="team-members-card">
        <img src="robert.jpg" alt="robert" width={300} height={400} />
        <div className="member-name">Robert Fox</div>
       </div>
       <div className="team-members-card">
        <img src="cody.jpg" alt="cody" width={300} height={400} />
        <div className="member-name">Cody Fisher</div>
       </div>
      </div>
    </div>
    <div className="review">
      <div className="ribbon">
        
      </div>
    </div>
    
    
    </>
  ) 
};
export default page;
