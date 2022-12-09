import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ChatService from "../../services/chatService";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: null,
    currentChat: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      state.chats = action.payload;
    });
  },
});

export const {} = chatSlice.actions;

export default chatSlice.reducer;

export const fetchChats = createAsyncThunk("chat/fetchChats", async () => {
  return ChatService.fetchChats()
    .then((data) => {
      data.forEach((chat: any) => {
        chat.Users.forEach((user: any) => {
          user.status = "offline";
        });
        chat.Messages.reverse();
      });
    })
    .catch(console.error);
});
