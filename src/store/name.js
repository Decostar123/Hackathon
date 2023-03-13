import { createSlice } from "@reduxjs/toolkit";

const name = createSlice({
  name: "name",
  initialState: [
    { id: 1, description: "arjun", greenDot: true },
    { id: 2, description: "Nakul", greenDot: true },
    { id: 3, description: "sahdev", greenDot: true },
    { id: 4, description: "krishna", greenDot: true },
    { id: 5, description: "vinesh", greenDot: true },
    { id: 6, description: "heet", greenDot: true },
    { id: 7, description: "parth", greenDot: true },
    { id: 8, description: "yash", greenDot: true },
    { id: 9, description: "shivang", greenDot: true },
    { id: 10, description: "ramesh", greenDot: true },
    { id: 11, description: "suresh", greenDot: true },
    { id: 12, description: "aakash", greenDot: true },
    { id: 13, description: "deco", greenDot: true },
  ],
  reducers: {
    setGreen(state, payload) {
      return state.map((ele) => {
        if (ele.id === payload.id) {
          return { ...ele, greenDot: payload.green };
        }
        return ele;
      });
    },

    setAllRead(state, payload) {
      return state.map((ele) => {
        // if (ele.id === payload.id) {
        return { ...ele, greenDot: false };
        // }
        // return ele;
      });
    },
    setNotGreen(state, payload) {
      return state.map((ele) => {
          console.log("--",ele.id,payload.payload.id)
        if (ele.id === payload.payload.id+1) {
          return { ...ele, greenDot: false };
        }
        return ele;
      });
    },
  },
});

export default name.reducer;
export const { setGreen ,setNotGreen} = name.actions;

