import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: true,
  theme: 'light',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    set: (state, action) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { set } = appSlice.actions
export default appSlice.reducer
