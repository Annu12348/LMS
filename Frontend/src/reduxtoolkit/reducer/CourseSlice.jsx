import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  course: null,
}

const CourseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourse:((state, action) => {
        state.course = action.payload
    })
    }
})

// Action creators are generated for each case reducer function
export const { setCourse } = CourseSlice.actions

export default CourseSlice.reducer