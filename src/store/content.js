import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, content: [] },
  { id: 2, content: [] },
  { id: 3, content: [] },
  { id: 4, content: [] },
  { id: 5, content: [] },
  { id: 6, content: [] },
  { id: 7, content: [] },
  { id: 8, content: [] },
  { id: 9, content: [] },
];
// [
//   { id: 1, description: "arjun", greenDot: true },
//   { id: 2, description: "Nakul", greenDot: true },
//   { id: 3, description: "sahdev", greenDot: true },
//   { id: 4, description: "krishna", greenDot: true },
//   { id: 5, description: "vinesh", greenDot: true },
//   { id: 6, description: "heet", greenDot: true },
//   { id: 7, description: "parth", greenDot: true },
//   { id: 8, description: "yash", greenDot: true },
//   { id: 9, description: "shivang", greenDot: true },
// ];
export const content = createSlice({
  name: "content",
  initialState,
  // initialState: { aaa: "aaa" },

  //  [
  //   { id: 1, content: [] },
  //   { id: 2, content: [] },
  //   { id: 3, content: [] },
  //   { id: 4, content: [] },
  //   { id: 5, content: [] },
  //   { id: 6, content: [] },
  //   { id: 7, content: [] },
  //   { id: 8, content: [] },
  //   { id: 9, content: [] },
  // ]
  reducers: {
    addContent(state, payload) {
      state = current(state);
      // console.log("state", state);
      // console.log("payload", payload);

      // state.forEach( ( ele , ind ) =>{
      //   if( ind + 1 === )

      // })
      // const data = state.filter((ele, ind) => {
      //   console.log(ind + 1 + "-" + payload.payload.id);
      //   return ind + 1 === payload.payload.id;
      // });

      // console.log("data", data);
      // const obj = data[0];
      // console.log("obj", obj);
      // const arr = obj.content;
      // console.log("content", obj.content);
      // console.log("info", payload.payload.info);
      // obj.content.push(payload.payload.info);

      return state.map((ele, ind) => {
        console.log(ind + 1, ele.id);
        if (ind + 1 === payload.payload.id) {
          console.log(ele, payload.payload.info);
          // ele.content.push(payload.payload.info);
          // const temp = ele.content;
          const temp = [...ele.content];
          // for (const pp of ele.content) temp.push(pp);
          console.log("temp1", temp);

          temp.push(payload.payload.info);
          console.log("temp2", temp);
          return { ...ele, content: temp };

          // return { ...ele, content: [...content, payload.payload.info] };
          return ele;
        }
        return ele;
      });
    },
  },
});

export default content.reducer;
export const { addContent } = content.actions;
