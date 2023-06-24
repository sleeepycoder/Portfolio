import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="4" />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
