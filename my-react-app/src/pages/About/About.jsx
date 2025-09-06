import React from 'react';
import "./About.css";
import aboutImg from "../../components/images/book_shelf.png";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="Book Shelf" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookStore</h2>
            <p className='fs-17'>
              Welcome to BookStore — your go-to place for exploring a wide range of books. 
              Whether you love fiction, non-fiction, or academic reads, we provide a collection 
              that suits every reader’s interest. Our goal is to make reading more accessible 
              and enjoyable for everyone.
            </p>
            <p className='fs-17'>
              At BookStore, we believe that every book holds a world of knowledge and imagination. 
              Dive into your next adventure today and discover stories that inspire, educate, and entertain.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
