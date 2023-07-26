// src/components/contact/Contact.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './showContact.css'

const ShowContact = () => {
  const [messages, setMessages] = useState([]);

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  
  function formatTime(dateString) {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  }
  
  function openMailbox(email) {
    const mailtoLink = `mailto:${email}`;
    window.open(mailtoLink, '_blank');
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/contact');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const formatText = (text) => {
      return text.replace(/\n/g, '<br>');
  }

  return (
    <section className="contact section" id="contact">
      <br />
      <center><h2>All Messages</h2>
      <hr style={{width:"30%"}} /></center>

      <div className="contact__container container grid">
        <div className="contact__messages">
          {messages.map((message) => (
            <div key={message._id} className="contact__message-card">
              <h3 className="contact__message-title">From: {message.name}</h3>
              <br />
              <h6>Email: {message.email}</h6>
              <br />
              <p className="contact__message-content" dangerouslySetInnerHTML={{ __html: formatText(message.message) }}></p>
              <br />
              <div className="contact__message-info" style={{float:"right"}}>
                <span className="contact__message-date">{formatDate(message.createdAt)} (</span>
                <span className="contact__message-time">{formatTime(message.createdAt)})</span>
              </div>
              <br />
              <button className="contact__mailbox-btn" onClick={() => openMailbox(message.email)}>
                <i className="contact__mailbox-icon fa fa-envelope" />
                Send MailBack
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowContact;
