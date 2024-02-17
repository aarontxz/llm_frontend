import React, { useState } from 'react';
import '../styles/ConversationList.css'; 

const ConversationList = ({ conversations, onStart, onDelete }) => {
  // State to manage input values for each conversation
  const [conversationInputs, setConversationInputs] = useState({});

  const handleChange = (event, conversationId) => {
    const { value } = event.target;
    setConversationInputs({
      ...conversationInputs,
      [conversationId]: value,
    });
  };

  const handleSubmit = (event, conversationId) => {
    event.preventDefault();
    const prompt = conversationInputs[conversationId]?.trim();
    if (prompt) {
      onStart(conversationId, prompt);
      // Clear the input field after submission
      setConversationInputs({
        ...conversationInputs,
        [conversationId]: '',
      });
    }
  };

  return (
    <div id="conversation-list">
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            <div>
              <strong>Conversation ID:</strong> {conversation.id}
              <button id={`delete-button-${conversation.id}`} onClick={() => onDelete(conversation.id)}>Delete</button>
            </div>
            <div>
              <strong>Prompts and Responses:</strong>
              <ul>
                {conversation.prompts.map((prompt, index) => (
                  <React.Fragment key={index}>
                    <li className="prompt">User: {prompt.text}</li>
                    {conversation.responses[index] && (
                      <li className="response">AI: {conversation.responses[index].text}</li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <form onSubmit={(event) => handleSubmit(event, conversation.id)}>
              <div className="input-wrapper">
                <input
                  type="text"
                  value={conversationInputs[conversation.id] || ''}
                  onChange={(event) => handleChange(event, conversation.id)}
                  placeholder="Enter prompt"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
