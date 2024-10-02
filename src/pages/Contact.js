import React from 'react';
import '../css/Contact.css';

const Contact = () => (
  <div className="contact-container">
    <h1>Contact Us</h1>
    <form>
      <div>
        <label>Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message</label>
        <textarea name="message"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
    <div className="contact-info">
      <h2>Contact Information</h2>
      <p>Email: contact@educationplatform.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 123 Education St, Learning City, Country</p>
    </div>
  </div>
);

export default Contact;