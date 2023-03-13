import { createSlice } from "@reduxjs/toolkit";

export const activeChatIdSlice = createSlice({
  name: "activeChatIdSlice",
  initialState: {
      id:0
  },
  reducers: {
    setActiveChatId(state, id) {
      return { type: "setActiveChatId", id: id.payload };
    },
  },
});

export const { setActiveChatId } = activeChatIdSlice.actions;

export default activeChatIdSlice.reducer;
