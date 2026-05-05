import { StreamChat } from 'stream-chat';

const client = StreamChat.getInstance(process.env.STREAM_API_KEY, process.env.STREAM_API_SECRET);

export const upsertStreamUser = async (userData) => {
  try {
    await client.upsertUser(userData);
  } catch (error) {
    console.error('Error upserting user to Stream:', error);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await client.deleteUser(userId);
  } catch (error) {
    console.error('Error deleting user from Stream:', error);
  }
};