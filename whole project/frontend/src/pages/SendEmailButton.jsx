import React from 'react';
import emailjs from 'emailjs-com';

function SendEmailButton() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id',    // Replace with your service ID from EmailJS
        'your_template_id',   // Replace with your template ID
        e.target,
        'your_user_id'        // Replace with your user ID from EmailJS
      )
      .then(
        (result) => {
          alert('Email sent successfully!');
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send email');
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <button type="submit">Send Email</button>
    </form>
  );
}

export default SendEmailButton;
