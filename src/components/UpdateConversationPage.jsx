import React from 'react';
import { useParams } from 'react-router-dom';
import ConversationUpdate from '../components/ConversationUpdate';

const UpdateConversationPage = () => {
  const { conversationId } = useParams();

  return (
    <div>
      <h2>Update Conversation</h2>
      <ConversationUpdate conversationId={conversationId} />
    </div>
  );
};

export default UpdateConversationPage;