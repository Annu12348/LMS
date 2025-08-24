import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lecture: [],
  SingleLectureCourse: null,
};

const LectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {
    setLecture: (state, action) => {
      state.lecture = action.payload;
    },
    setSingleLectureCourse: (state, action) => {
      state.SingleLectureCourse = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLecture, setSingleLectureCourse } = LectureSlice.actions;

export default LectureSlice.reducer;
