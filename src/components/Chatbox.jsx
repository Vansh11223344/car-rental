import React, { useState, useEffect, useRef } from 'react';
import './Chatbox.css';

const Chatbox = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user', timestamp: new Date() }]);
      setInput('');
      setIsTyping(true);

      setTimeout(() => {
        const botResponses = [
          "Hello! How can I assist you today?",
          "Our team will connect with you shortly!",
          "Thanks for reaching out! How can we help?"
        ];
        setMessages(prev => [...prev, { 
          text: botResponses[Math.floor(Math.random() * botResponses.length)], 
          sender: 'bot',
          timestamp: new Date()
        }]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbox">
      <div className="chatbox-header">
        <div className="header-content">
          <span className="title">Robo Support</span>
          <span className="status">Online</span>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <div className="chatbox-body">
        <div className="welcome-message">
          <p>Welcome to our Car Rentals Support! How can we assist you today?</p>
        </div>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-content">
              <p>{msg.text}</p>
              <span className="timestamp">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="typing-indicator">
            <span></span><span></span><span></span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="chatbox-footer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button className="send-btn" onClick={sendMessage}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M2 12L22 2L12 22L9 13L2 12Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chatbox;