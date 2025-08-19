import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lecture: null
};

const LectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {
    setLecture: (state, action) => {
      state.lecture = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLecture } = LectureSlice.actions;

export default LectureSlice.reducer;