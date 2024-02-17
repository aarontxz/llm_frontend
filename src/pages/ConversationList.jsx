import React from 'react';

const ConversationList = ({ conversations, onStart, onDelete }) => {
  return (
    <div>
      {conversations.map(conversation => (
        <div key={conversation.id}>
          <span>{conversation.id}</span>
          <button onClick={() => onStart(conversation.id)}>Start</button>
          <button onClick={() => onDelete(conversation.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;