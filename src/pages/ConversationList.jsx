import React, { useState, useEffect } from 'react';
import { getConversations } from '../services/api';

const ConversationList = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    fetchConversations();
  }, []);

  const fetchConversations = async () => {
    try {
      const data = await getConversations();
      setConversations(data);
    } catch (error) {
      console.error('Error fetching conversations:', error);
    }
  };

  return (
    <div>
      <h2>Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            Conversation ID: {conversation.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
