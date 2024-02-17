import React, { useState } from 'react';
import { updateConversation } from '../services/api';

const ConversationUpdate = ({ conversationId }) => {
  const [prompt, setPrompt] = useState('');

  const handleUpdate = async () => {
    try {
      await updateConversation(conversationId, prompt);
      console.log('Conversation updated successfully');
    } catch (error) {
      console.error('Error updating conversation:', error);
    }
  };

  return (
    <div>
      <h3>Update Conversation</h3>
      <input
        type="text"
        placeholder="Enter prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default ConversationUpdate;