import React from 'react';
import './contact.css';

const Contact = () => {
  const SUBMIT_URL =
  'https://www.greatfrontend.com/api/questions/contact-form';
const submitForm =async (event)=> {
  event.preventDefault();
  const form = event.target;

  try {
    if (form.action !== SUBMIT_URL) {
      alert('Incorrect form action value');
      return;
    }

    if (form.method.toLowerCase() !== 'post') {
      alert('Incorrect form method value');
      return;
    }

    const formData = new FormData(form);
    const response = await fetch(SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    });

    const text = await response.text();
    alert(text);
  } catch (_) {
    alert('Error submitting form!');
  }
}

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <form 
        onSubmit={submitForm}
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="post">
        <div className="form-group">
        <label htmlFor="name-input">Name</label>
        <input id="name-input" name="name" type="text" />    
        </div>
        <div className="form-group">
        <label htmlFor="email-input">Email</label>
        <input id="email-input" name="email" type="email" />
        </div>
        <div className="form-group">
        <label htmlFor="message-input">Message</label>
        <textarea
          id="message-input"
          name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
