import React from "react";
import {Link} from 'react-router-dom'

export default function ContactMe() {
  return (
    <footer className="row description container-fluid">
      <h2 className="main-heading">
        <span className='contact-title'>Contact Me</span> <br />
        I'd love to hear your thoughts!
      </h2>
      <div className="info col-lg-6">
        <div className="user-info">
          <p className='content'>Pooja Sakshi Ram</p>
          <p className="location content">Hyderabad,Telangana</p>
          <p className="email content">poojasram7@gmail.com</p>
          <ul className="social-media-icons row">
            <li className="icons col-lg-3 col-md-3">
              <Link to={{pathname:'https://www.linkedin.com/in/pooja-sakshi-ram-9046ab165'}} target="_blank"  className="links content">
                Linkedin
              </Link>
            </li>
            <li className="icons col-lg-3 col-md-3">
              <Link to={{pathname:'https://github.com/poojas10'}} target="_blank" className="links content">
                Github
              </Link>
            </li>
            <li className="icons col-lg-3 col-md-3">
              <Link to={{pathname:'https://twitter.com/pooja_997?t=mm3a4FHe8kPu9ckm6k3TfA&s=03'}} target="_blank" className="links content">
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="contact" className="contact-form col-lg-6">
        <div className="form">
          <form action="https://formspree.io/f/xnqlygqq" method="POST">
            <label htmlFor="name" className='content'>Name</label>
            <input type="text" name="name" id="" />
            <label htmlFor="email" className='content'>Email</label>
            <input type="email" name="_replyto" id="email" />
            <label htmlFor="message" className='content'>Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <button type='submit' className='content'>Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
