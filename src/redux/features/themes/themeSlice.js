import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDarkMode: localStorage.getItem('isDarkMode') === 'true' || false,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: state => {
      state.isDarkMode = !state.isDarkMode
      localStorage.setItem('isDarkMode', state.isDarkMode.toString())
    },
  },
})

export const { toggleMode } = themeSlice.actions
export default themeSlice.reducer
