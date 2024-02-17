// ConversationList.jsx

import React from 'react';

const ConversationList = ({ conversations, onStart, onDelete }) => {
  return (
    <div>
      <h2>Conversation List</h2>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            {conversation.title} -{' '}
            <button onClick={() => onStart(conversation.id)}>Start</button>{' '}
            <button onClick={() => onDelete(conversation.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
