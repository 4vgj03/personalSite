import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../App.css'; // Ensure the global CSS is imported
import './ContactForm.css';
import marbleEmail from '../assets/images/marbleemail.png'; // Import the image

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [countdown, setCountdown] = useState(null); // State for the countdown timer
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setCountdown(5); // Start the countdown timer with 5 seconds
          setIsSubmitting(false);
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      setStateMessage(`Thank you for your message!\nTaking you home in ${countdown} seconds.`);
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      navigate('/');
    }
  }, [countdown, navigate]);

  return (
    <div className="contact-form-wrapper">
      
      {countdown === null ? (
        <>
        <h1 className='h1contact'>Let's get in contact!</h1>
        <form onSubmit={sendEmail} className="contact-form">
          <label className='form-label'>Name</label>
          <input type="text" name="user_name" />
          <label className='form-label'>Email</label>
          <input type="email" name="user_email" />
          <label className='form-label'>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" className='submit-btn' disabled={isSubmitting} />
          {stateMessage && (
            <p>{stateMessage}</p>
          )}
        </form>
        </>
      ) : (
        <div className="countdown-container">
          <div className="contact-image-container">
            <img src={marbleEmail} alt="Marble Email" className="contact-image" />
          </div>
          <p className='state-message'>{stateMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
