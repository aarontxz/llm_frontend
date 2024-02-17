import React, { useState } from 'react';
import { createConversation } from '../services/api';

const ConversationForm = () => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createConversation(prompt);
      setPrompt('');
      // Optionally, show a success message or redirect to another page
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error('Error creating conversation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Prompt:
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConversationForm;
