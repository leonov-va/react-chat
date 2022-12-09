import API from "./api";

const ChatService = {
  async fetchChats() {
    const response = await API.get("/chats");
    return response.data;
  },
};

export default ChatService;
