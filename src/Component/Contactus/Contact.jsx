import React from 'react';
import './Contact.css';
import { TbFileLike } from 'react-icons/tb';

function Contact() {
  return (
    <section id='contact'>
      <div className='contact-container'>
        <h2 className='contact-title'>Get in Touch</h2>
        <form action="https://formspree.io/f/mnnqkjyj" method="POST" className='contact-form'>
          <div className='form-group'>
            <label htmlFor="username">Name</label>
            <input name="username" type="text" id="username" required placeholder="Your full name" />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input name="mail" type="email" id="email" required placeholder="you@example.com" />
          </div>
          <div className='form-group'>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" required placeholder="Write your message here..." />
          </div>
          <button type="submit" className="contact-btn">
            Submit <TbFileLike />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
