import { configureStore } from "@reduxjs/toolkit";
import activeChatIdSlice from "./activeChatIdSlice";
import name from "./name";
import content from "./content";
const store = configureStore({
  reducer: {
    activeChatIdSlice: activeChatIdSlice,
    name: name,
    content: content,
  },
});

export default store;
