import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const Contacttest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email using EmailJS
    sendEmail();
  };

  const sendEmail = () => {
    // Initialize EmailJS with your public key
    emailjs.init({ publicKey: 'iWbqJZrmkQqjKq3yd' });

    // Replace 'contact_service' and 'contact_form' with your service ID and template ID
    emailjs.sendForm('service_um1g1kn', 'template_blm36kd', '#contact-form')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Optionally, reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <div>
      <h1>Contact 5/22/2024 v1</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contacttest;
