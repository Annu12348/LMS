import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: [],
  publisheds: [],
  singleCourse: null
};

const CourseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setSingleCourse: (state, action) => {
      state.singleCourse = action.payload;
    },
    setPublisheds: (state, action) => {
      state.publisheds = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCourse, setSingleCourse, setPublisheds } = CourseSlice.actions;

export default CourseSlice.reducer;
