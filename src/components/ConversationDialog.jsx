// ConversationDialog.jsx

import React, { useState } from 'react';

const ConversationDialog = ({ onStart }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleStartClick = () => {
    onStart(message);
    setMessage('');
  };

  return (
    <div>
      <h2>Start Conversation</h2>
      <input type="text" value={message} onChange={handleMessageChange} />
      <button onClick={handleStartClick}>Start</button>
    </div>
  );
};

export default ConversationDialog;
