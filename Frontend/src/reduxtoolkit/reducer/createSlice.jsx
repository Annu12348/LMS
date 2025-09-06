import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  me: null
}

const counterSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUser:((state, action) => {
        state.user = action.payload
    }),

    setMe: ((state, action) => {
      state.me = action.payload
    })
    }
})

// Action creators are generated for each case reducer function
export const { setUser, setMe } = counterSlice.actions

export default counterSlice.reducer