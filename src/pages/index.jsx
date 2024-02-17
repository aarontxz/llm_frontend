import React, { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';
import ConversationList from '../components/ConversationList';

const IndexPage = () => {
  const [conversations, setConversations] = useState([]);

  // Fetch conversations from the backend or an API endpoint
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await fetch('api/conversations');
        if (!response.ok) {
          throw new Error('Failed to fetch conversations');
        }
        const data = await response.json();
        setConversations(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchConversations();
  }, []);

  const handleStartConversation = (conversationId) => {
    // Logic to start a conversation
    console.log(`Starting conversation ${conversationId}`);
  };

  const handleDeleteConversation = (conversationId) => {
    // Logic to delete a conversation
    console.log(`Deleting conversation ${conversationId}`);
  };

  return (
    <Container>
      <h1>Conversation List</h1>
      <ConversationList
        conversations={conversations}
        onStart={handleStartConversation}
        onDelete={handleDeleteConversation}
      />
      <Button variant="contained" color="primary">Start New Conversation</Button>
    </Container>
  );
};

export default IndexPage;
