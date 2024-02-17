const BASE_URL = 'http://localhost:8000'; // Adjust URL according to your backend API

export const createConversation = async (prompt) => {
  try {
    const response = await fetch(`${BASE_URL}/conversations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    if (!response.ok) {
      throw new Error('Failed to create conversation');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Failed to create conversation: ' + error.message);
  }
};
