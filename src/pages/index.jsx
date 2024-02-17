import React, { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';
import ConversationList from '../components/ConversationList';
import Conversation from '../types';
import '../styles.css'; 

const IndexPage = () => {
  const [conversations, setConversations] = useState([]);

  const fetchConversations = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/conversations');
      if (!response.ok) {
        throw new Error('Failed to fetch conversations');
      }
      const data = await response.json();
      
      // Map fetched data to Conversation objects
      const conversationObjects = data.map(conversation => {
        console.log(conversation.prompts);
        console.log(conversation.responses);
        return new Conversation(conversation._id, conversation.prompts, conversation.responses);
      });
  
      setConversations(conversationObjects); // Update conversations state with fetched data
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchConversations();
  }, []); // Fetch conversations when the component mounts

  const handleStartConversation = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(/* Optionally pass any data needed for starting a new conversation */),
      });
      if (!response.ok) {
        throw new Error('Failed to start conversation');
      }
      const responseData = await response.json();
      const newConversation = new Conversation(responseData._id, responseData.prompts, responseData.responses);
      console.log(responseData)
      setConversations([...conversations, newConversation]); // Add new conversation to conversations state
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteConversation = async (conversationId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/conversations/${conversationId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete conversation');
      }
      // Remove the deleted conversation from the conversations state
      setConversations(conversations.filter(conversation => conversation.id !== conversationId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateConversation = async (conversationId, prompt) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/conversations`, {
        method: 'PUT', // Change the method to PUT for updating the conversation
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ conversation_id: conversationId, prompt }), // Send the conversation ID and prompt in the request body
      });
      if (!response.ok) {
        throw new Error('Failed to update conversation');
      }
      fetchConversations();
      // Optionally handle the response data here if needed
      // For example, you might want to update the state with the updated conversation data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h1>Conversation List</h1>
      <ConversationList
        conversations={conversations}
        onStart = {handleUpdateConversation}
        onDelete= {handleDeleteConversation}
      />
      <Button variant="contained" color="primary" onClick={handleStartConversation}>
        Start New Conversation
      </Button>
    </Container>
  );
};


export default IndexPage;