import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

const counterSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUser:((state, action) => {
        state.user = action.payload
    })
    }
})

// Action creators are generated for each case reducer function
export const { setUser } = counterSlice.actions

export default counterSlice.reducer